using DAL_Dillio_Project.Core;
using DAL_Dillio_Project.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;
using DAL_Dillio_Project.Persistence.Repository;

namespace DAL_Dillio_Project.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private DillioContext _context;
        public UnitOfWork(DillioContext _context)
        {
            this._context = _context;
        }

        public IBlogRepository Blogs { get; }

        public ICategoryRepository Categories { get; }

        public ICommentRepository Comments { get; }

        public IImageRepository Images { get; }

        public ILikeRepository Likes { get; }

        public IProductRepository Products { get; }

        public IStoreRepository Stores { get; }

        public IReviewRepository ReviewRepository { get; }


        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
