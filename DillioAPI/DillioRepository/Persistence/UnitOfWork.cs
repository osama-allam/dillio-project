using DAL_Dillio_Project.Core;
using DAL_Dillio_Project.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL_Dillio_Project.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        public UnitOfWork()
        {

        }

        public IBlogRepository Blogs { get; }

        public ICategoryRepository Categories { get; }

        public ICommentRepository Comments { get; }

        public IImageRepository Images { get; }

        public ILikeRepository Likes { get; }

        public IProductRepository Products { get; }

        public IStoreRepository Stores { get; }

        public int Complete()
        {
            throw new NotImplementedException();
        }
    }
}
