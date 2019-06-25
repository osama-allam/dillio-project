using System.Collections.Generic;

namespace Dillio_Backend.API.ViewModel
{
    public class ProductEditViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public float Discount { get; set; }
        public int CategoryId { get; set; }
        public string Description { get; set; }
        public IList<ImageCloudViewModel> Images { get; set; }
        public IList<SpecsViewModel> Specs { get; set; }
    }
}