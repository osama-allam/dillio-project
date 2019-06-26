using Dillio_Backend.BLL.Core.Domain;
using System.Collections.Generic;

namespace Dillio_Backend.BLL.Core.Repositories
{
    public interface ICommentRepository : IRepository<Comment>
    {
       IEnumerable<Comment> GetCommentsOnBlog(int BlogId);   
    }
}