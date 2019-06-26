using Dillio_Backend.BLL.Core.Domain;
using System.Collections.Generic;

namespace Dillio_Backend.BLL.Core.Repositories
{
    public interface ILikeRepository : IRepository<Like>
    {
        IEnumerable<Like> GetLikesOnBlog(int BlogId);
    }
}