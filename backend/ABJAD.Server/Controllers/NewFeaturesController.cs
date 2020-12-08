using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ABJAD.Server.Data;
using ABJAD.Server.Models;
using AutoMapper;
using ABJAD.Server.Models.Dtos;

namespace ABJAD.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewFeaturesController : ControllerBase
    {
        private readonly AbjadContext context;
        private readonly IMapper mapper;

        public NewFeaturesController(AbjadContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public class PostFeatureDto
        {
            public string Title { get; set; }
            public string Text { get; set; }
        }

        /// <summary>
        /// Get the new features of a version
        /// </summary>
        /// <param name="versionId">Defaults to the Id of the latest version</param>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NewFeatureSummaryDto>>> GetNewFeatures([FromQuery] int? versionId = null)
        {
            if (versionId == null)
            {
                versionId = context.Versions.Last().Id;
            }

            return await context.NewFeatures
                .Include(f => f.Version)
                .Where(f => f.Version.Id == versionId)
                .Select(f => mapper.Map<NewFeatureSummaryDto>(f))
                .ToListAsync();
        }

        /// <summary>
        /// Edit an existing feature
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///     
        ///     PUT /api/newfeatures/1
        ///     {
        ///         "Content-Type": "application/json",
        ///         "body": {
        ///             "Title": "",
        ///             "Text": ""
        ///         }
        ///     }
        /// </remarks>
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNewFeature(int id, [FromBody] PostFeatureDto featureDto)
        {
            var feature = await context.NewFeatures.FindAsync(id);

            if (feature == null)
            {
                return NotFound("Feature is not found.");
            }

            context.Entry(feature).State = EntityState.Modified;
            feature
                .SetText(feature.Text)
                .SetTitle(feature.Title);

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewFeatureExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        /// <summary>
        /// Create a new feature
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///     
        ///     POST /api/newfeatures?versionId=1
        ///     {
        ///         "Content-Type": "application/json",
        ///         "body": {
        ///             "Title": "",
        ///             "Text": ""
        ///         }
        ///     }
        /// </remarks>
        [HttpPost]
        public async Task<ActionResult<NewFeatureSummaryDto>> PostNewFeature([FromQuery] int versionId, [FromBody] PostFeatureDto featureDto)
        {
            var version = await context.Versions.FindAsync(versionId);

            if (version == null)
            {
                return NotFound("Version is not found.");
            }

            var feature = new NewFeature { Text = featureDto.Text, Title = featureDto.Title, Version = version };
            context.NewFeatures.Add(feature);
            await context.SaveChangesAsync();

            return mapper.Map<NewFeatureSummaryDto>(feature);
        }

        /// <summary>
        /// Delete an existing feature
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNewFeature(int id)
        {
            var feature = await context.NewFeatures.FindAsync(id);
            if (feature == null)
            {
                return NotFound();
            }

            context.NewFeatures.Remove(feature);
            await context.SaveChangesAsync();

            return NoContent();
        }

        private bool NewFeatureExists(int id)
        {
            return context.NewFeatures.Any(e => e.Id == id);
        }
    }
}
