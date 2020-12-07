using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ABJAD.Server.Data;
using ABJAD.Server.Models;
using AutoMapper;
using ABJAD.Server.Models.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using System;
using System.IO;

namespace ABJAD.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VersionsController : ControllerBase
    {
        private readonly AbjadContext context;
        private readonly IMapper mapper;
        private readonly IWebHostEnvironment env;

        public VersionsController(AbjadContext context, IMapper mapper, IWebHostEnvironment env)
        {
            this.context = context;
            this.mapper = mapper;
            this.env = env;
        }

        public class PostVersionDto
        {
            public float VersionNumber { get; set; }
            public DateTime? ReleaseDate { get; set; }
        }

        /// <summary>
        /// Get list of versions
        /// </summary>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VersionSummaryDto>>> GetVersions()
        {
            return await context.Versions
                .Select(v => mapper.Map<VersionSummaryDto>(v))
                .ToListAsync();
        }

        /// <summary>
        /// Get a version's content
        /// </summary>
        [HttpGet("{id}")]
        public async Task<ActionResult<VersionDto>> GetVersion(int id)
        {
            var version = await context.Versions
                .Include(v => v.NewFeatures)
                .Include(v => v.Articles)
                .ThenInclude(va => va.Article)
                .FirstOrDefaultAsync(v => v.Id == id);

            if (version == null)
            {
                return NotFound();
            }

            return mapper.Map<VersionDto>(version);
        }

        /// <summary>
        /// Upload a version's executable
        /// </summary>
        [HttpPut("{id}")]
        public async Task<ActionResult<VersionDto>> PutVersion(int id, IFormFile executableFile)
        {
            var version = await context.Versions.FindAsync(id);

            if (version == null)
            {
                return NotFound("Version not found.");
            }

            context.Entry(version).State = EntityState.Modified;

            if (version.ExecutablePath != null)
            {
                Directory.Delete(version.ExecutablePath);
            }

            version.ExecutablePath = await AddFileToSystemAsync(executableFile, version.Number.ToString());
            version.LastModifiedDate = DateTime.Now;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VersionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return mapper.Map<VersionDto>(version);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Sample request:
        /// 
        ///     POST /api/version
        ///     {
        ///         "Content-Type": "application/json",
        ///         "body" : {
        ///             "VersionNumber": 1.0,
        ///             "ReleaseDate": "1-1-2020"
        ///         }
        ///     }
        /// </remarks>
        [HttpPost]
        public async Task<ActionResult<VersionDto>> PostVersion([FromBody] PostVersionDto versionDto)
        {
            var version = new Models.Version
            {
                Number = versionDto.VersionNumber,
                ReleaseDate = versionDto.ReleaseDate?? DateTime.Now,
                LastModifiedDate = DateTime.Now,
                Articles = new List<VersionArticle>(),
                NewFeatures = new List<NewFeature>()
            };

            context.Versions.Add(version);
            await context.SaveChangesAsync();

            return mapper.Map<VersionDto>(version);
        }

        /// <summary>
        /// Delete a Version
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVersion(int id)
        {
            var version = await context.Versions.FindAsync(id);
            if (version == null)
            {
                return NotFound();
            }

            if (version.ExecutablePath != null)
            {
                Directory.Delete(version.ExecutablePath);
            }

            context.Versions.Remove(version);
            await context.SaveChangesAsync();

            return NoContent();
        }

        private bool VersionExists(int id)
        {
            return context.Versions.Any(e => e.Id == id);
        }

        private async Task<string> AddFileToSystemAsync(IFormFile file, string folderName)
        {
            if (file == null)
            {
                return null;
            }

            var extension = file.FileName.Substring(file.FileName.LastIndexOf('.') + 1);
            // Add unique name to avoid possible name conflicts
            var uniquefileName = DateTime.Now.Ticks + "." + extension;
            var folderPath = Path.Combine(env.WebRootPath, folderName);
            var filePath = Path.Combine(folderPath, uniquefileName);

            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            using (var fileStream = new FileStream(filePath, FileMode.Create, FileAccess.Write))
            {
                // Copy the file to storage
                await file.CopyToAsync(fileStream);
            }

            return filePath;
        }
    }
}
