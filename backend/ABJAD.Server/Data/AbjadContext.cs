using ABJAD.Server.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace ABJAD.Server.Data
{
    public class AbjadContext : ApiAuthorizationDbContext<AbjadUser>
    {
        public AbjadContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions) 
            : base(options, operationalStoreOptions)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<VersionArticle>()
                .ToTable("VersionArticle")
                .HasOne(va => va.Article)
                .WithMany(a => a.Versions);

            builder.Entity<VersionArticle>()
                .HasOne(va => va.Version)
                .WithMany(v => v.Articles);

            builder.Entity<Article>()
                .ToTable("Article")
                .HasMany(a => a.Versions)
                .WithOne(va => va.Article);

            builder.Entity<Version>()
                .ToTable("Version")
                .HasMany(v => v.Articles)
                .WithOne(va => va.Version);

            builder.Entity<Version>()
                .HasMany(v => v.NewFeatures)
                .WithOne(f => f.Version);

            builder.Entity<NewFeature>()
               .ToTable("NewFeature");
        }

        public DbSet<Article> Articles { get; set; }
        
        public DbSet<NewFeature> NewFeatures { get; set; }

        public DbSet<Version> Versions { get; set; }

        public DbSet<VersionArticle> VersionArticles { get; set; }
    }
}
