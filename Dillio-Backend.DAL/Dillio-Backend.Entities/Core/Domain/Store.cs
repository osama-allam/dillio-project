using System;
using System.Collections.Generic;

namespace Dillio_Backend.BLL.Core.Domain
{
    [Serializable]
    public class Store
    {
        public Store()
        {
            Branches = new HashSet<Branches>();
            ProductStores = new HashSet<ProductStore>();
            Reviews = new HashSet<Review>();
        }
        public int Id { get; set; }
        public string Name { get; set; }      
        public string Description { get; set; }
        public string Url { get; set; }
        public float StarRating{ get; set; }
        public virtual  ICollection<Branches> Branches{ get; set; }
        public virtual ICollection<ProductStore> ProductStores { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }


    }
}
