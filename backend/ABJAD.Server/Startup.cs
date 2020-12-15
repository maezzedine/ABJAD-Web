using ABJAD.Server.Data;
using ABJAD.Server.Models;
using ABJAD.Server.Settings;
using AutoMapper;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace ABJAD.Server
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddDatabaseDeveloperPageExceptionFilter();

            services.AddDbContext<AbjadContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("AbjadContext")));

            services.AddDefaultIdentity<AbjadUser>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddEntityFrameworkStores<AbjadContext>();

            services.AddIdentityServer()
                .AddApiAuthorization<AbjadUser, AbjadContext>();

            services.AddAuthentication()
                .AddIdentityServerJwt();

            services.AddAutoMapper(typeof(Startup).Assembly);

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ABJAD.Server", Version = "v1" });
            });

            services.AddTransient(sp => GetSection<AdminConfigurationsSettings>());
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ABJAD.Server v1"));

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();

            app.UseAuthentication();
            app.UseIdentityServer();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }

        private T GetSection<T>() where T : new ()
        {
            var settings = new T();
            var configSettings = Configuration.GetSection(typeof(T).Name);
            configSettings.Bind(settings);
            return settings;
        }
    }
}
