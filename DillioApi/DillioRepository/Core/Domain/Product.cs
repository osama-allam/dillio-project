using System;
using System.Collections.Generic;
using System.Text;

namespace DAL_Dillio_Project.Core.Domain
{
    [Serializable]
    public class Product
    {
        public Product()
        {
            Images = new HashSet<Image>();
        }
        public int Id { get; set; }
        public float Price { get; set; }
        public float Discount { get; set; }
        public ICollection<Image> Images { get; set; }
    }
}
