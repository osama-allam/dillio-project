using System.Data.Entity;
using DAL_Dillio_Project.Core.Repositories;
using DillioBackendRepository.Core.Domain;

namespace DAL_Dillio_Project.Persistence.Repository
{
    public class LikeRepository:Repository<Like>,ILikeRepository
    {
        public LikeRepository(DbContext context) : base(context)
        {
        }
    }
}