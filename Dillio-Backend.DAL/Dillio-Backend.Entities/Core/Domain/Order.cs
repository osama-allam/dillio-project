using System;
using System.Collections.Generic;

namespace Dillio_Backend.BLL.Core.Domain
{
    public class Order
    {
        public Order()
        {

        }

        public int Id { get; set; }
        public ICollection<Product> Products { get; set; }
        public DateTime DateOfOrder { get; set; }
        public int FK_UserId { get; set; }
        public ApplicationUser User{ get; set; }
    }
}