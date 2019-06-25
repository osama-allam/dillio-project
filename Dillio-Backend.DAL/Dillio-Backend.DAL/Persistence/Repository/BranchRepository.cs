using Dillio_Backend.BLL.Core.Domain;
using Dillio_Backend.BLL.Core.Repositories;

namespace Dillio_Backend.DAL.Persistence.Repository
{
    public class BranchRepository:Repository<Branches>,IBranchRepository
    {
        public BranchRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}