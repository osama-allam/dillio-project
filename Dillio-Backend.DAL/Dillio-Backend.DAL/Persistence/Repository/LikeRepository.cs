using Dillio_Backend.BLL.Core.Domain;
using Dillio_Backend.BLL.Core.Repositories;
using System.Collections.Generic;
using System.Linq;

namespace Dillio_Backend.DAL.Persistence.Repository
{
    public class LikeRepository:Repository<Like>,ILikeRepository
    {
        public LikeRepository(ApplicationDbContext context) : base(context)
        {
        }


        public IEnumerable<Like> GetLikesOnBlog(int BlogId)
        {
            return _entities.Where(l => l.BlogId == BlogId);
        }
    }
}