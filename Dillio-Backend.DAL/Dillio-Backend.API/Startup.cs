using AutoMapper;
using Dillio_Backend.API.Helpers;
using Dillio_Backend.BLL.Core;
using Dillio_Backend.BLL.Core.Domain;
using Dillio_Backend.DAL;
using Dillio_Backend.DAL.Persistence;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Dillio_Backend.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            services.AddDbContext<ApplicationDbContext>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddRoleManager<IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>();

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidIssuer = "dillioApi",
                    ValidAudience = "http://localhost:4200",
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("dillioAppSecretKey"))

                };
            });

            //Cloudinary services settings
            services.Configure<CloudinarySettings>(Configuration.GetSection("CloudinarySettings"));

            //AutoMapper

            //var mappingConfig = new MapperConfiguration(mc =>
            //{
            //    mc.AddProfile(new AutoMapperProfiles());
            //});

            //IMapper mapper = mappingConfig.CreateMapper();
            //services.AddSingleton(mapper);
            services.AddAutoMapper(typeof(Startup).Assembly);

            //services.AddAuthentication(options =>
            //        {
            //            options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
            //            options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            //            options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            //        })
            //    .AddOpenIdConnect(options =>
            //    {
            //        options.Authority = "https://localhost:44371";
            //        options.ClientId = "AuthWeb";
            //        options.SaveTokens = true;
            //        options.TokenValidationParameters.NameClaimType = "name";
            //    }).AddCookie(); 

            //services.AddAuthentication()
            //    .AddJwtBearer(options =>
            //    {
            //        options.Authority = "https://localhost:44371";
            //        options.Audience = "DemoApi";
            //        options.TokenValidationParameters.NameClaimType = "client_id";
            //    });

            //services.AddAuthorization(options =>
            //{
            //    options.DefaultPolicy = new AuthorizationPolicyBuilder(JwtBearerDefaults.AuthenticationScheme)
            //        .RequireAuthenticatedUser()
            //        .Build();
            //});




            //services.AddDbContext<ApplicationDbContext>();
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddMvc();

            //services.AddCors(options =>
            //{
            //    options.AddPolicy("SPA", policy =>
            //    {
            //        policy.WithOrigins()
            //            .AllowAnyHeader()
            //            .AllowAnyMethod();
            //    });
            //});
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IUnitOfWork unitOfWork)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                unitOfWork.EnsureSeedDataForContext();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }




            //app.UseStaticFiles(new StaticFileOptions()
            //{
            //    FileProvider = new PhysicalFileProvider(Path.Combine(@"E:\ITI Courses\GP\dillio-front\dillio-project\dillio-app\src\assets", Path.GetFileName(@"images"))),
            //    RequestPath = new PathString("/images")
            //});
            app.UseAuthentication();
            app.UseStaticFiles();

            app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            app.UseAuthentication();


            app.UseMvcWithDefaultRoute();
        }
    }
}
