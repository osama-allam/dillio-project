namespace Dillio_Backend.API.ViewModel
{
    public class ProductPartialUpdate
    {
        public string Name { get; set; }
        public float Price { get; set; }
        public float Discount { get; set; }
        public int CategoryId { get; set; }
        public string Description { get; set; }
    }
}