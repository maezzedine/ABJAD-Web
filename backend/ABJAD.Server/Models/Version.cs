using System;

namespace ABJAD.Server.Models
{
    public class Version
    {
        public int Id { get; set; }

        public float Number { get; set; }
        
        public DateTime ReleaseDate { get; set; }
        
        public DateTime LastModifiedDate { get; set; }

        public string ExecutablePath { get; set; }
    }
}
