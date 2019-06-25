using System;

namespace Dillio_Backend.API.ViewModel
{
    public class ProductReviewViewModel
    {

        public int Id { get; set; }
        public string ReviewDescription { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int ProductId { get; set; }
        public string UserId { get; set; }
        public int StoreId { get; set; }
        public DateTime ReviewDate { get; set; }
        public float Rating { get; set; }
    }
}