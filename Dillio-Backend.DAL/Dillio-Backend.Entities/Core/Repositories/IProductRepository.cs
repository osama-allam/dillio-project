using Dillio_Backend.BLL.Core.Domain;
using System.Collections.Generic;

namespace Dillio_Backend.BLL.Core.Repositories
{
    public interface IProductRepository : IRepository<Product>
    {
        IEnumerable<Product> GetAllProductsWithJoins();
        Product GetSingleProductWithJoins(object id);
    }
}