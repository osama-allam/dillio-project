using Dillio_Backend.BLL.Core.Domain;
using Dillio_Backend.BLL.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Dillio_Backend.DAL.Persistence.Repository
{
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        public ProductRepository(ApplicationDbContext context) : base(context)
        {
        }

        public IEnumerable<Product> GetAllProductsWithJoins()
        {
            return _entities
                .Include(p => p.Images)
                .Include(p => p.Specs);
        }
        public IEnumerable<Product> GetAllProductsAllJoins()
        {
            return _entities
                .Include(p => p.Images)
                .Include(p=>p.Category)
                .Include(p=>p.Reviews)
                .Include(p => p.Specs);
        }
        public Product GetSingleProductWithJoins(object id)
        {
            return _entities
                .Include(p => p.Images)
                .Include(p => p.Specs)
                .AsQueryable()
                .SingleOrDefault(p => p.Id == (int)id);

        }
    }
}