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

        public Article SetTitle(string title)
        {
            if (title != null)
            {
                Title = title;
            }

            return this;
        }

        public Article SetBody(string body)
        {
            if (body != null)
            {
                HtmlBody = body;
            }

            return this;
        }
    }
}
