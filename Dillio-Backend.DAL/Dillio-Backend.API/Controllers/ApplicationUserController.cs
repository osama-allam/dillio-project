using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dillio_Backend.API.Models;
using Dillio_Backend.BLL.Core.Domain;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Dillio_Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        #region Private Member Variable
        //private UserManager<ApplicationUser> _userManager;
        //private SignInManager<ApplicationUser> _signInManager;
        #endregion

        #region Constructor
        //public ApplicationUserController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        //{
        //    _userManager = userManager;
        //    _signInManager = signInManager;
        //}
        #endregion

        #region Actions

        //[HttpPost]
        //[Route("Register")]
        //public IActionResult RegisterNewUser(ApplicationUserRegistrationModel model)
        //{
        //    var newUser = new ApplicationUser()
        //    {
        //        FirstName = model.FirstName,
        //        LastName = model.LastName,
        //        Email = model.EmailAddress,

        //    };

        //}

        #endregion


        //[Route("signin")]
        //public IActionResult SignIn()
        //{
        //    return Challenge(new AuthenticationProperties {RedirectUri = "/"});
        //}

        //[Route("signout")]
        //public async Task SignOut()
        //{
        //    await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        //    await HttpContext.SignOutAsync(OpenIdConnectDefaults.AuthenticationScheme);

        //}

    }
}