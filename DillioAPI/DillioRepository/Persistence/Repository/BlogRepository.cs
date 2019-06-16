
using DAL_Dillio_Project.Core.Repositories;
using DillioBackendRepository.Core.Domain;
using System.Data.Entity;

namespace DAL_Dillio_Project.Persistence.Repository
{
    public class BlogRepository:Repository<Blog>,IBlogRepository
    {
        public BlogRepository(DbContext context) : base(context)
        {
        }
    }
}