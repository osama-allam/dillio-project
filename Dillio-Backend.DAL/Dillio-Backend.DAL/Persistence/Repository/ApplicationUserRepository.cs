using Dillio_Backend.BLL.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dillio_Backend.BLL.Core.Repositories;

namespace Dillio_Backend.DAL.Persistence.Repository
{
    public class ApplicationUserRepository : Repository<ApplicationUser>, IApplicationUserRepository
    {
        public ApplicationUserRepository(ApplicationDbContext context) : base(context)
        {
        }

        public ApplicationDbContext ApplicationDbContext => context as ApplicationDbContext;

        //public async Task<ApplicationUser> GetUserAsync(string username, string password)
        //{
        //    return Task.CompletedTask
        //}
    }
}
