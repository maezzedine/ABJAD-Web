using System;
using System.Collections.Generic;

namespace ABJAD.Server.Models
{
    public class Version
    {
        public int Id { get; set; }

        public float Number { get; set; }
        
        public DateTime ReleaseDate { get; set; }
        
        public DateTime LastModifiedDate { get; set; }

        public string ExecutablePath { get; set; }

        public List<VersionArticle> Articles { get; set; }

        public List<NewFeature> NewFeatures { get; set; }
    }
}
