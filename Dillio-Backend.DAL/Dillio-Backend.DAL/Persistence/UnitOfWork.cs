using System;
using System.Collections.Generic;
using System.Text;
using Dillio_Backend.BLL.Core;
using Dillio_Backend.BLL.Core.Domain;
using Dillio_Backend.BLL.Core.Repositories;
using Dillio_Backend.DAL.Persistence.Repository;

namespace Dillio_Backend.DAL.Persistence
{
    class UnitOfWork : IUnitOfWork
    {
        #region ReadOnlyMemberVariables

        private readonly ApplicationDbContext _context;

        #endregion

        #region Repositories Member Variables

        public IApplicationUserRepository ApplicationUser { get; set; }


        #endregion

        #region Constructor

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            ApplicationUser = new ApplicationUserRepository(context);

        }

        #endregion

        #region Methods
        public int Complete()
        {
          return  _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        #endregion

    }
}
