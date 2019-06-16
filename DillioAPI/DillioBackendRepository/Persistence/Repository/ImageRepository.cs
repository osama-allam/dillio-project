using System.Data.Entity;
using DAL_Dillio_Project.Core.Domain;
using DAL_Dillio_Project.Core.Repositories;

namespace DAL_Dillio_Project.Persistence.Repository
{
    public class ImageRepository:Repository<Image>,IImageRepository
    {
        public ImageRepository(DbContext context) : base(context)
        {
        }
    }
}