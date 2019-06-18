using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dillio_Backend.BLL.Core.Domain
{
    /// <summary>
    /// This Class is responisble for adding any additional fields in the user
    /// table
    /// </summary>
  public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        

    }
}
