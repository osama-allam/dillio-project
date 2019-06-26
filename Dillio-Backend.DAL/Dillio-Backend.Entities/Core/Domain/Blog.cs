using System;
using System.Collections.Generic;

namespace Dillio_Backend.BLL.Core.Domain
{
    [Serializable]
    public class Blog
    {

        public Blog()
        {

        }

        public int Id { get; set; }
        public string PostName { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int CommentNumber { get; set; }
        public DateTime Date { get; set; }
        public string ImageUrl { get; set; }
        public string FK_UserId { get; set; }
        public ApplicationUser User{ get; set; }

        //cutomer and customer fk


    }
}
