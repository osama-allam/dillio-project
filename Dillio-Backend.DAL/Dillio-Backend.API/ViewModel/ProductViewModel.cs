using Dillio_Backend.BLL.Core.Domain;
using System.Collections.Generic;

namespace Dillio_Backend.API.ViewModel
{
    public class ProductViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public float Discount { get; set; }
        public string Description { get; set; }
        public IEnumerable<ImageListingViewModel> Images{ get; set; }
        public string categoryName { get; set; }

        
    }
}
