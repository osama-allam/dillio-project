using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Dillio_Backend.BLL.Core.Domain;
//using Dillio_Backend.BLL.Core.Domain;
using Dillio_Backend.DAL;
using IdentityModel;
using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Mappers;
using IdentityServer4.Quickstart.UI;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Dillio_Backend.IdentityServer
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("SPA", policy =>
                {
                    policy.WithOrigins("http://localhost4200")
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowAnyOrigin();
                });
            });

            //services.AddIdentity<ApplicationUser, IdentityRole>()
            //    .AddEntityFrameworkStores<ApplicationDbContext>()
            //    .AddDefaultTokenProviders();
            //services.AddIdentity<ApplicationUser, IdentityRole>()
            //    .AddEntityFrameworkStores<ApplicationDbContext>()
            //    .AddDefaultTokenProviders();

            services.AddMvc();


            var connectionString = @"Server = .;Database=dillioDBIdentity;trusted_connection=yes";
            var migrationsAssembly = typeof(Startup).GetTypeInfo().Assembly.GetName().Name;

            services.AddIdentityServer(
                //    options =>
                //{
                //    options.Events.RaiseErrorEvents = true;
                //    options.Events.RaiseInformationEvents = true;
                //    options.Events.RaiseFailureEvents = true;
                //    options.Events.RaiseSuccessEvents = true;
                //}
                    )
                .AddDeveloperSigningCredential()
                .AddSigningCredential(new X509Certificate2(@"D:\GP Project\dillio-project\Dillio-Backend.DAL\Dillio-Backend.IdentityServer\dillio.pfx",""))
                //.AddInMemoryIdentityResources(IdentityServerConfig.GetIdentityResources())
                //.AddInMemoryClients(IdentityServerConfig.GetClients())
                .AddTestUsers(IdentityServerConfig.GetUsers().ToList()) 
                //.AddAspNetIdentity<ApplicationUser>()
                //.AddInMemoryApiResources(IdentityServerConfig.GetApiResources())
                .AddConfigurationStore(builder =>
                    {
                        builder.ConfigureDbContext = b => b.UseSqlServer(connectionString,
                            options => options.MigrationsAssembly(migrationsAssembly));
                    })
                .AddOperationalStore(builder => builder.ConfigureDbContext = b=>b.UseSqlServer(connectionString, options => options.MigrationsAssembly(migrationsAssembly)));

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }



            InitializeDatabase(app);

            //AccountOptions.ShowLogoutPrompt = false;
            //AccountOptions.AutomaticRedirectAfterSignOut = true;
            app.UseAuthentication();
            app.UseIdentityServer();
            app.UseCors("SPA");
            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
        }

        private void InitializeDatabase(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                serviceScope.ServiceProvider.GetRequiredService<PersistedGrantDbContext>().Database.Migrate();

                var context = serviceScope.ServiceProvider.GetRequiredService<ConfigurationDbContext>();
                context.Database.Migrate();
                if (!context.Clients.Any())
                {
                    foreach (var client in IdentityServerConfig.GetClients())
                    {
                        context.Clients.Add(client.ToEntity());
                    }
                    context.SaveChanges();
                }

                if (!context.IdentityResources.Any())
                {
                    foreach (var resource in IdentityServerConfig.GetIdentityResources())
                    {
                        context.IdentityResources.Add(resource.ToEntity());
                    }
                    context.SaveChanges();
                }

                if (!context.ApiResources.Any())
                {
                    foreach (var resource in IdentityServerConfig.GetApiResources())
                    {
                        context.ApiResources.Add(resource.ToEntity());
                    }
                    context.SaveChanges();
                }
            }
        }
    }
}
