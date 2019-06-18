using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dillio_Backend.API.Models
{
    public class ApplicationUserRegistrationModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }


    }
}
