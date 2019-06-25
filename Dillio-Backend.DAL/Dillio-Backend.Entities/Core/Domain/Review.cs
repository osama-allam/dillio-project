using System;

namespace Dillio_Backend.BLL.Core.Domain
{
    public class Review
    {
        public int Id { get; set; }
        public string ReviewDescription { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public float Rating{ get; set; }
        public Product Product { get; set; }
        public int ProductId { get; set; }
        public string UserId { get; set; }
        public Store Store { get; set; }
        public int StoreId { get; set; }
        public DateTime ReviewDate{ get; set; }
        public ApplicationUser User { get; set; }

    }
}