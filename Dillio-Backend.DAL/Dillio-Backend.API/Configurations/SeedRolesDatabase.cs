using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dillio_Backend.BLL.Core.Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Dillio_Backend.API.Configurations
{
    public static class SeedRolesDatabase
    {
        public static async Task CreateRoles(IServiceProvider serviceProvider, IConfiguration Configuration)
        {
            //Getting the both usermanager and rolemanager
            var RoleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var UserManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();

            //roles names array that will be seeded in the database
            string[] roleNames = { Role.Admin, Role.Member };
            IdentityResult roleResult;

            foreach (var roleName in roleNames)
            {
                // creating the roles and seeding them to the database
                var roleExist = await RoleManager.RoleExistsAsync(roleName);
                if (!roleExist)
                {
                    roleResult = await RoleManager.CreateAsync(new IdentityRole(roleName));
                }
            }

            //creating the admin
            var Admin = new ApplicationUser
            {
                UserName = Configuration.GetSection("Admin")["adminUsername"],
                Email = Configuration.GetSection("Admin")["adminEmail"]
            };

            var password = Configuration.GetSection("Admin")["adminPassword"];

            //searching for the user by the email written in the configuration
            var user = await UserManager.FindByEmailAsync(Configuration.GetSection("Admin")["adminEmail"]);

            //checking if the user is not found 
            if (user == null)
            {
                //start creating an admin
                var createAdmin = await UserManager.CreateAsync(Admin, password);
                if (createAdmin.Succeeded)
                {
                    await UserManager.AddToRoleAsync(Admin, Role.Admin);
                }
            }

            //if found the user is assigned to the admin role
            await UserManager.AddToRoleAsync(user, Role.Admin);

        }
    }
}
