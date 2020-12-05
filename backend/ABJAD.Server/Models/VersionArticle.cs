namespace ABJAD.Server.Models
{
    public class VersionArticle
    {
        public int Id { get; set; }

        public Version Version { get; set; }

        public Article Article { get; set; }
    }
}
