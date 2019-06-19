using System;
using System.Collections.Generic;

namespace Dillio_Backend.BLL.Core.Domain
{
    [Serializable]
    public class Blog
    {

        public Blog()
        {
            Comments = new HashSet<Comment>();
            Likes = new HashSet<Like>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Image Image { get; set; }
        public DateTime TimeOfBLog { get; set; }
        public string ImageURL{ get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<Like> Likes { get; set; }
        public string FK_UserId { get; set; }
        public ApplicationUser User{ get; set; }

        //cutomer and customer fk


    }
}
