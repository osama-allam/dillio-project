using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Dillio_Backend.API.Models;
using Dillio_Backend.BLL.Core.Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
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

        public AuthController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;

        }


        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register(ApplicationUserRegistrationModel model)
        {
            ApplicationUser emailExists = await _userManager.FindByEmailAsync(model.EmailAddress);
            var usernameExist = await _userManager.FindByNameAsync(model.Username);


            if (emailExists != null)
            {
                return StatusCode(406, "The Email You Entered is already found");
            }
            else if (emailExists == null && usernameExist == null)
            {
                ApplicationUser user = new ApplicationUser()
                {
                    UserName = model.Username,
                    Email = model.EmailAddress,
                    FirstName = model.FirstName,
                    LastName = model.LastName

                };

                var registerationResult = await _userManager.CreateAsync(user, model.Password);

                if (registerationResult.Succeeded)
                {
                    return Ok(registerationResult);

                }

                return StatusCode(500);
            }


            return StatusCode(406, "The username You Entered is already found");

        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(ApplicationLoginModel model)
        {
            var user = await _userManager.FindByEmailAsync(model.email);
            

            if (user != null && await _userManager.CheckPasswordAsync(user , model.Password))
            {
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, model.email),
                    new Claim(JwtRegisteredClaimNames.FamilyName, user.LastName)

                };

                var signinkey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("dillioAppSecretKey"));

                var token = new JwtSecurityToken(
                        issuer: "dillioApi",
                        audience: "http://localhost:4200",
                        expires: DateTime.UtcNow.AddDays(1),
                        claims: claims,
                        signingCredentials: new SigningCredentials(signinkey, SecurityAlgorithms.HmacSha256)
                    );
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });
            }

            return Unauthorized();


        }
    }
}