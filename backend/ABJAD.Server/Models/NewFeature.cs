namespace ABJAD.Server.Models
{
    public class NewFeature
    {
        public int Id { get; set; }

        public Version Version { get; set; }

        public string Title { get; set; }

        public string Text { get; set; }

        public NewFeature SetTitle(string title)
        {
            if (!string.IsNullOrEmpty(title))
            {
                Title = title;
            }

            return this;
        }

        public NewFeature SetText(string text)
        {
            if (!string.IsNullOrEmpty(text))
            {
                Text = text;
            }

            return this;
        }
    }
}
