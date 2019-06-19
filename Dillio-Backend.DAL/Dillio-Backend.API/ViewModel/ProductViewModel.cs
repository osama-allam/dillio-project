using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dillio_Backend.BLL.Core.Domain;

namespace Dillio_Backend.API.ViewModel
{
    public class ProductViewModel
    {
        public string Name { get; set; }
        public float Price { get; set; }
        public float Discount { get; set; }
        public string Description { get; set; }
        public ICollection<Image> Images { get; set; }
        public ICollection<Review> Reviews { get; set; }
    }
}
