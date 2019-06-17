using System;
using System.Collections.Generic;
using DAL_Dillio_Project.Core.Domain;

namespace DillioRepository.Core.Domain
{
    public class Order
    {
        public Order()
        {
            
        }

        public int Id { get; set; }
        public ICollection<Product> Products { get; set; }
        public DateTime DateOfOrder { get; set; }
        //customer make order
    }
}