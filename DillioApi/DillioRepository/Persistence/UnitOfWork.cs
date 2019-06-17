using DAL_Dillio_Project.Core;
using DAL_Dillio_Project.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;
using DAL_Dillio_Project.Persistence.Repository;
using DillioRepository.Core.Repositories;
using DillioRepository.Persistence.Repository;

namespace DAL_Dillio_Project.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private DillioContext _context;
        public UnitOfWork(DillioContext _context)
        {
            this._context = _context;

            Blogs = new BlogRepository(_context);
            Categories = new CategoryRepository(_context);
            Comments = new CommentRepository(_context);
            Images = new ImageRepository(_context);
            Likes = new LikeRepository(_context);
            Products = new ProductRepository(_context);
            Stores = new StoreRepository(_context);
            Reviews = new ReviewRepository(_context);
            Orders = new OrderRepository(_context);

        }

        public IBlogRepository Blogs { get; }

        public ICategoryRepository Categories { get; }

        public ICommentRepository Comments { get; }

        public IImageRepository Images { get; }

        public ILikeRepository Likes { get; }

        public IProductRepository Products { get; }

        public IStoreRepository Stores { get; }

        public IReviewRepository Reviews { get; }
        
        public IOrderRepository Orders { get; }

        public IReviewRepository ReviewRepository => throw new NotImplementedException();

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
