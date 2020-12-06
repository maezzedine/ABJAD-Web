using System;
using System.Collections.Generic;

namespace ABJAD.Server.Models.Dtos
{
    public class ArticleSummaryDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public DateTime CreationDate { get; set; }

        public string HtmlBody { get; set; }
    }

    public class ArticleDto : ArticleSummaryDto
    {
        public List<VersionSummaryDto> Versions { get; set; }
    }
}
