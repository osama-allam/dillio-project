﻿using System;
using System.Collections.Generic;

namespace Dillio_Backend.BLL.Core.Domain
{
    [Serializable]
    public class Product
    {
        public Product()
        {
            Images = new HashSet<Image>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public float Discount { get; set; }
        public ICollection<Image> Images { get; set; }
        public ICollection<Review> Reviews { get; set; }
        public Category Category { get; set; }
        public int FK_CategoryId { get; set; }
    }
}
