using Dillio_Backend.BLL.Core.Domain;
using Dillio_Backend.BLL.Core.Repositories;

namespace Dillio_Backend.DAL.Persistence.Repository
{
    public class BlogRepository:Repository<Blog>,IBlogRepository
    {
        public BlogRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}