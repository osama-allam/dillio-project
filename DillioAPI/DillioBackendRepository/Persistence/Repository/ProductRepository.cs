using System.Data.Entity;
using DAL_Dillio_Project.Core.Domain;
using DAL_Dillio_Project.Core.Repositories;



namespace DAL_Dillio_Project.Persistence.Repository
{
    public class ProductRepository:Repository<Product>,IProductRepository
    {
        public ProductRepository(DbContext context) : base(context)
        {
        }

        //add mycontext
    }
}
