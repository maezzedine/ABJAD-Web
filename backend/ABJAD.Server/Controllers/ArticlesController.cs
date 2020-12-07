using System;
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
    public class ArticlesController : ControllerBase
    {
        private readonly AbjadContext context;
        private readonly IMapper mapper;

        public ArticlesController(AbjadContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public class PostArticleDto
        {
            public string Title { get; set; }
            public string Htmlody { get; set; }
        }

        /// <summary>
        /// Get list of Articles of a version
        /// </summary>
        /// <param name="versionId">Optional. If not given, latest version Id is considere</param>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ArticleSummaryDto>>> GetArticles([FromRoute] int? versionId = null)
        {
            if (versionId == null)
            {
                versionId = context.Versions.Last().Id;
            }

            return await context.Articles
                .Include(a => a.Versions)
                .ThenInclude(av => av.Version)
                .Where(a => a.Versions.Any(av => av.Version.Id == versionId))
                .Select(a => mapper.Map<ArticleSummaryDto>(a))
                .ToListAsync();
        }

        /// <summary>
        /// Get an Article
        /// </summary>
        [HttpGet("{id}")]
        public async Task<ActionResult<ArticleSummaryDto>> GetArticle(int id)
        {
            var article = await context.Articles.FindAsync(id);

            if (article == null)
            {
                return NotFound();
            }

            return mapper.Map<ArticleSummaryDto>(article);
        }

        /// <summary>
        /// Edit an Article
        /// </summary>
        [HttpPut("{id}")]
        public async Task<IActionResult> PutArticle(int id, [FromBody] PostArticleDto article)
        {
            var articleFromDB = await context.Articles.FindAsync(id);

            if (articleFromDB == null)
            {
                return NotFound();
            }

            articleFromDB
                .SetTitle(article.Title)
                .SetBody(article.Htmlody);

            context.Entry(articleFromDB).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArticleExists(id))
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
        /// Create a new Article
        /// </summary>
        [HttpPost]
        public async Task<ActionResult<Article>> PostArticle([FromQuery] int versionId, [FromBody] PostArticleDto articleDto)
        {
            var version = await context.Versions.FindAsync(versionId);

            if (version == null)
            {
                return NotFound("Version not found.");
            }

            var article = new Article
            {
                Title = articleDto.Title,
                HtmlBody = articleDto.Htmlody,
                CreationDate = DateTime.Now,
                Versions = new List<VersionArticle>() 
            };

            article.Versions.Append(new VersionArticle { Article = article, Version = version });

            context.Articles.Add(article);
            await context.SaveChangesAsync();

            return article;
        }

        /// <summary>
        /// Add previous Article to a version
        /// </summary>
        [HttpPost("FromArchive")]
        public async Task<ActionResult<Article>> AddArticleToVersion(int id, [FromQuery] int versionId)
        {
            var version = await context.Versions.FindAsync(versionId);

            if (version == null)
            {
                return NotFound("Version not found.");
            }

            var article = await context.Articles
                .Include(a => a.Versions)
                .FirstOrDefaultAsync(a => a.Id == id);

            if (article == null)
            {
                return NotFound("Article not found.");
            }

            var articleExistsInVersion = article.Versions.Any(v => v.Id == versionId);
            if (articleExistsInVersion)
            {
                return BadRequest("Article already exists in this version.");
            }

            context.VersionArticles.Add(new VersionArticle { Article = article, Version = version });
            await context.SaveChangesAsync();

            return Ok();
        }

        /// <summary>
        /// Delete Article
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArticle(int id)
        {
            var article = await context.Articles.FindAsync(id);
            if (article == null)
            {
                return NotFound();
            }

            context.Articles.Remove(article);
            await context.SaveChangesAsync();

            return NoContent();
        }

        private bool ArticleExists(int id)
        {
            return context.Articles.Any(e => e.Id == id);
        }
    }
}
