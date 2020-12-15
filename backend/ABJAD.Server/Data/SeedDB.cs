using ABJAD.Server.Models;
using ABJAD.Server.Settings;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace ABJAD.Server.Data
{
    public class SeedDB
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetRequiredService<AbjadContext>();
            var userManager = serviceProvider.GetRequiredService<UserManager<AbjadUser>>();
            var adminConfig = serviceProvider.GetRequiredService<AdminConfigurationsSettings>();

            context.Database.EnsureCreated();

            if (!context.Users.Any())
            {
                var SuperUser = new AbjadUser
                {
                    UserName = adminConfig.Username,
                    Email = adminConfig.Email,
                    EmailConfirmed = true,
                    SecurityStamp = Guid.NewGuid().ToString()
                };
                userManager.CreateAsync(SuperUser, adminConfig.Password);
            }
        }
    }
}
