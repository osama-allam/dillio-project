using Dillio_Backend.BLL.Core.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using Dillio_Backend.BLL.Core.Repositories;

namespace Dillio_Backend.DAL.Persistence.Repository
{
    public class ApplicationUserRepository : Repository<ApplicationUser>, IApplicationUserRepository
    {
        public ApplicationUserRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
