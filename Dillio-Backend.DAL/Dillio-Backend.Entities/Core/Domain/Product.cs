using System;
using System.Collections.Generic;

namespace Dillio_Backend.BLL.Core.Domain
{
    [Serializable]
    public class Product
    {
        public Product()
        {
            Images = new HashSet<Image>();
            Reviews = new HashSet<Review>();
            Specs = new HashSet<Specs>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public float Discount { get; set; }
        public string Description { get; set; }
        public virtual ICollection<Image> Images { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
        public virtual ICollection<Specs> Specs { get; set; }
        public virtual ICollection<ProductStore>ProductStores{ get; set; }
        public virtual Category Category { get; set; }
        public int CategoryId { get; set; }
    }
}
