using System;
using System.Collections.Generic;
using System.Text;

namespace DAL_Dillio_Project.Core.Domain
{
    public class Product
    {
        public int Id { get; set; }
        public float Price { get; set; }
        public float Discount { get; set; }
        public ICollection<Image> Images { get; set; }
    }
}
