using DAL_Dillio_Project.Core.Domain;

namespace DillioRepository.Core.Domain
{
    public class Review
    {
        public int Id { get; set; }
        public string ReviewDescription { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public Product Product { get; set; }
        public int FK_ProductId { get; set; }

        //Icollection from customer

    }
}