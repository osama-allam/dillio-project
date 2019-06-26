using Dillio_Backend.BLL.Core.Domain;
using Dillio_Backend.BLL.Core.Repositories;
using System.Collections.Generic;
using System.Linq;

namespace Dillio_Backend.DAL.Persistence.Repository
{
    public class CommentRepository:Repository<Comment>,ICommentRepository
    {
        public CommentRepository(ApplicationDbContext context) : base(context)
        {
        }

        public IEnumerable<Comment> GetCommentsOnBlog(int BlogId)
        {
            return _entities.Where(c => c.BlogId == BlogId);
        }
    }
}