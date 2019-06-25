using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Dillio_Backend.API.Configurations;
using Dillio_Backend.API.Models;
using Dillio_Backend.BLL.Core.Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

//using Microsoft.IdentityModel.JsonWebTokens;


namespace Dillio_Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private SignInManager<ApplicationUser> _signInManager;
        private UserManager<ApplicationUser> _userManager;
        private RoleManager<IdentityRole> _roleManager;
        private readonly AppSettings _appSettings;


        public AuthController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager,
            RoleManager<IdentityRole> roleManager, IOptions<AppSettings> appSettings)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _appSettings = appSettings.Value;


        }


        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register(ApplicationUserRegistrationModel model)
        {
            //getting the user with its email
            var emailExists = await _userManager.FindByEmailAsync(model.EmailAddress);
            //getting a user with its username
            var usernameExist = await _userManager.FindByNameAsync(model.Username);

            //checking if the user exists
            if (emailExists != null)
            {
                //return the unacceptable status code because the email is already found
                return StatusCode(406, "The Email You Entered is already found");
            }
            //if both username and email are not assocated with any account we create a new one
            else if (emailExists == null && usernameExist == null)
            {
                //setting the new instance of the user  
                ApplicationUser user = new ApplicationUser()
                {
                    UserName = model.Username,
                    Email = model.EmailAddress,
                    FirstName = model.FirstName,
                    LastName = model.LastName

                };

                //waiting for the usermanager to add the user
                var registerationResult = await _userManager.CreateAsync(user, model.Password);

                //checking the registration results
                if (registerationResult.Succeeded)
                {
                    //Setting the registered user as a member
                    await _userManager.AddToRoleAsync(user, Role.Member);
                    return Ok(registerationResult);

                }

                //return the status code if an exception occurred
                return StatusCode(500);
            }

            //return the unacceptable status code because the username is already found
            return StatusCode(406, "The username You Entered is already found");

        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(ApplicationLoginModel model)
        {

            // getting the user details from database
            var user = await _userManager.FindByEmailAsync(model.email);

            //checking if the user exists or not and validating its login credentials
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                //Getting the user role from database
                var role = await _userManager.GetRolesAsync(user);
                //var roleName = role.FirstOrDefault();

                //Start creation of token
                //Setting the tokens claims
                var claims = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Role, role.FirstOrDefault()),
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(ClaimTypes.GivenName, user.UserName),
                });

                //creating the instance from the token handler class that is responsible for creating the tokens
                var tokenHandler = new JwtSecurityTokenHandler();
                //setting the key for the token
                var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
                //Descriping the token shape
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = claims,
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                        SecurityAlgorithms.HmacSha256Signature)
                };
                //creating the token
                var token = tokenHandler.CreateToken(tokenDescriptor);
                //returning the status code and the token to user
                return Ok(new
                {
                    token = tokenHandler.WriteToken(token), user
                    
                });


            }

            return Unauthorized();


        }


    }

}