using Dillio_Backend.BLL.Core;
using Dillio_Backend.BLL.Core.Repositories;
using Dillio_Backend.DAL.Persistence.Repository;
using System.Threading.Tasks;

namespace Dillio_Backend.DAL.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        #region ReadOnlyMemberVariables

        private readonly ApplicationDbContext _context;

        #endregion



        #region Constructor

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            ApplicationUser = new ApplicationUserRepository(context);
            Blogs = new BlogRepository(context);
            Categories = new CategoryRepository(context);
            Comments = new CommentRepository(context);
            Images = new ImageRepository(context);
            Likes = new LikeRepository(context);
            Products = new ProductRepository(context);
            Stores = new StoreRepository(context);
            Reviews = new ReviewRepository(context);
            Orders = new OrderRepository(context);
            Specs = new SpecsRepository(context);
        }

        #region Repositories Member Variables

        public IApplicationUserRepository ApplicationUser { get; set; }
        public IBlogRepository Blogs { get; set; }

        public ICategoryRepository Categories { get; set; }

        public ICommentRepository Comments { get; set; }

        public IImageRepository Images { get; set; }

        public ILikeRepository Likes { get; set; }

        public IProductRepository Products { get; set; }

        public IStoreRepository Stores { get; set; }

        public IReviewRepository Reviews { get; set; }
        public ISpecsRepository Specs { get; }

        public IOrderRepository Orders { get; set; }


        #endregion





        #endregion

        #region Methods
        public int Complete()
        {
            return _context.SaveChanges();
        }

        public Task<int> CompleteAsync()
        {
            return _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        #endregion

    }
}
