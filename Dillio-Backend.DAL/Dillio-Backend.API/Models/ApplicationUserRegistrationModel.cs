using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Dillio_Backend.API.Models
{
    public class ApplicationUserRegistrationModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [Required(ErrorMessage = "Please Enter A Username")]
        public string Username { get; set; }
        [Required(ErrorMessage = "Please Enter email")]
        public string EmailAddress { get; set; }
        [Required(ErrorMessage = "Please Enter password")]
        public string Password { get; set; }


    }
}
