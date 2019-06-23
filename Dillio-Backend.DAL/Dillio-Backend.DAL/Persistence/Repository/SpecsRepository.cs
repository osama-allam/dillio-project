using Dillio_Backend.BLL.Core.Domain;
using Dillio_Backend.BLL.Core.Repositories;

namespace Dillio_Backend.DAL.Persistence.Repository
{
    public class SpecsRepository : Repository<Specs>, ISpecsRepository
    {
        public SpecsRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}