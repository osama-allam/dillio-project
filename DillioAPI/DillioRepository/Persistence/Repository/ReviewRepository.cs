using System.Data.Entity;
using DAL_Dillio_Project.Core.Repositories;
using DillioRepository.Core.Domain;

namespace DAL_Dillio_Project.Persistence.Repository
{
    public class ReviewRepository:Repository<Review>,IReviewRepository
    {
        public ReviewRepository(DbContext context) : base(context)
        {
        }
    }
}