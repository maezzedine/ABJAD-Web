using System;
using System.Collections.Generic;

namespace ABJAD.Server.Models
{
    public class Article
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public DateTime CreationDate { get; set; }    
        
        public string HtmlBody { get; set; }

        public List<VersionArticle> Versions { get; set; }
    }
}
