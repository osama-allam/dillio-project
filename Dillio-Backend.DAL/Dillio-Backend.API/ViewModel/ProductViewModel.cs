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
        public IList<Image> Images { get; set; }
        public Image Image { get; set; }
    }
}
