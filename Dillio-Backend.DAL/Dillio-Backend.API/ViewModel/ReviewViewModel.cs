using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dillio_Backend.BLL.Core.Domain;

namespace Dillio_Backend.API.ViewModel
{
    public class ReviewViewModel
    {
        public string ReviewDescription { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string FK_UserId { get; set; }
        //public int FK_ProductId { get; set; }
        //public Product Product { get; set; }
    }
}
