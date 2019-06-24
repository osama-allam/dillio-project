using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Dillio_Backend.API.Models
{
    public class ApplicationLoginModel
    {
        [Required(ErrorMessage = "email Is required")]
        [EmailAddress]
        public string email { get; set; }
        [Required(ErrorMessage = "Password Is required")]
        public string Password { get; set; }
    }
}
