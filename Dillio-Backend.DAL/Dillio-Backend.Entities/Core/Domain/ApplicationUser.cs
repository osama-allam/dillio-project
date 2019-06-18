using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dillio_Backend.BLL.Core.Domain
{
    /// <summary>
    /// This Class is responsible for adding any additional fields in the user
    /// table
    /// </summary>
  public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ICollection<Blog> Blogs{ get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<Like> Likes{ get; set; }
        public ICollection<Order> Orders{ get; set; }
        public ICollection<Review> Reviews{ get; set; }


    }
}
