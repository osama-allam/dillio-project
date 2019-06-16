using System.Data.Entity;
using DAL_Dillio_Project.Core.Repositories;
using DillioBackendRepository.Core.Domain;

namespace DAL_Dillio_Project.Persistence.Repository
{
    public class CategoryRepository:Repository<Category>,ICategoryRepository
    {
        public CategoryRepository(DbContext context) : base(context)
        {
        }
    }
}