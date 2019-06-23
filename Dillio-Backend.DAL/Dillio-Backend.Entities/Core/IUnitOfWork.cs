using Dillio_Backend.BLL.Core.Repositories;
using System;

namespace Dillio_Backend.BLL.Core
{
    public interface IUnitOfWork : IDisposable
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
        ISpecsRepository Specs { get; }
        int Complete();
    }
}
