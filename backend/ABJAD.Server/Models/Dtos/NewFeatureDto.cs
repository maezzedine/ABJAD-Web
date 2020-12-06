namespace ABJAD.Server.Models.Dtos
{
    public class NewFeatureSummaryDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Text { get; set; }
    }

    public class NewFeatureDto : NewFeatureSummaryDto
    {
        public VersionSummaryDto Version { get; set; }
    }
}
