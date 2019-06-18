using System;
using System.Collections.Generic;
using System.Text;
using Dillio_Backend.BLL.Core.Repositories;

namespace Dillio_Backend.BLL.Core
{
    public interface IUnitOfWork: IDisposable
    {
        //Repositories
        IApplicationUserRepository ApplicationUser { get; set; }

        int Complete();
    }
}
