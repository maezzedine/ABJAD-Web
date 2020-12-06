using System;
using System.Collections.Generic;

namespace ABJAD.Server.Models.Dtos
{
    public class VersionSummaryDto
    {
        public int Id { get; set; }

        public float Number { get; set; }

        public DateTime ReleaseDate { get; set; }

        public DateTime LastModifiedDate { get; set; }

        public string ExecutablePath { get; set; }
    }

    public class VersionDto : VersionSummaryDto
    {
        public List<ArticleSummaryDto> Articles { get; set; }

        public List<NewFeatureSummaryDto> NewFeatures { get; set; }
    }
}
