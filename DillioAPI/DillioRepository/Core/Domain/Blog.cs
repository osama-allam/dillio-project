using System;
using System.Collections.Generic;
using System.Text;
using DAL_Dillio_Project.Core.Domain;

namespace DillioBackendRepository.Core.Domain
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
        public ICollection<Comment> Comments { get; set; }
        public ICollection<Like> Likes { get; set; }

        //cutomer and customer fk
        

    }
}
