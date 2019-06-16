using DAL_Dillio_Project.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL_Dillio_Project.Core
{
    public interface IUnitOfWork
    {
        IBlogRepository Blogs { get; }
        ICategoryRepository Categories { get; }
        ICommentRepository Comments { get; }
        IImageRepository Images { get; }
        ILikeRepository Likes { get; }
        IProductRepository Products { get; }
        IStoreRepository Stores { get; }

        int Complete();
    }
}
