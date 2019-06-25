using Dillio_Backend.BLL.Core.Domain;
using Dillio_Backend.BLL.Core.Repositories;

namespace Dillio_Backend.DAL.Persistence.Repository
{
    public class ProductStoreRepository:Repository<ProductStore>,IProductStore

    {
        public ProductStoreRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}