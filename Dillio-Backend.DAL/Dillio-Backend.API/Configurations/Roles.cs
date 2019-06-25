using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Dillio_Backend.BLL.Core.Domain;
using Microsoft.AspNetCore.Identity;

namespace Dillio_Backend.API.Configurations
{
    public class Roles
    {
        public string username = "Admin";
        public string email = "admin@diilio.com";
        public string password = "adminP@ssw0rd";
        private UserManager<ApplicationUser> _userManager;
        private RoleManager<IdentityRole> _roleManager;
        private string[] roleNames = {"Admin", "User"};


        public Roles(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public async Task CreateRoles()
        {
            foreach (var roleName in roleNames)
            {
                var roleExist = await _roleManager.RoleExistsAsync(roleName);

                if (!roleExist)
                {
                    var roleResult = await _roleManager.CreateAsync(new IdentityRole(roleName));
                }
            }

            
        }


        public async Task AssigningUserToRole(string userEmail, string role)
        {
          var user = await _userManager.FindByEmailAsync(userEmail);

          if (user != null)
          {
              await _userManager.AddToRoleAsync(user, role);
          }
        }

        


    }
}
