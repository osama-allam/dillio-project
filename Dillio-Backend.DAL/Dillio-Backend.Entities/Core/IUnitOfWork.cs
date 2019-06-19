using System;
using System.Collections.Generic;
using System.Text;
using Dillio_Backend.BLL.Core.Repositories;

namespace Dillio_Backend.BLL.Core
{
    public interface IUnitOfWork: IDisposable
    {
        //Repositories
        IApplicationUserRepository ApplicationUser { get; set; }
        IBlogRepository Blogs { get; }
        ICategoryRepository Categories { get; }
        ICommentRepository Comments { get; }
        IImageRepository Images { get; }
        ILikeRepository Likes { get; }
        IProductRepository Products { get; }
        IStoreRepository Stores { get; }
        IReviewRepository Reviews { get; }
        int Complete();
    }
}
