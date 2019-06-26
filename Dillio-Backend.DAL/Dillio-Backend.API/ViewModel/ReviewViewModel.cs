using System;

namespace Dillio_Backend.API.ViewModel
{
    public class ReviewViewModel
    {
        public int Id { get; set; }
        public string ReviewDescription { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string FK_UserId { get; set; }
        public DateTime ReviewDate { get; set; }
        public float Rating { get; set; }
        //public int FK_ProductId { get; set; }
        //public Product Product { get; set; }
    }
}
