using System;
using System.Collections.Generic;
using System.Text;
using Dillio_Backend.BLL.Core;
using Dillio_Backend.BLL.Core.Domain;
using Dillio_Backend.DAL;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Dillio_Backend.DAL.Persistence;

namespace Dillio_Backend.BLL
{
    class RegistrationBLL
    {
        private UnitOfWork uw = new UnitOfWork(new ApplicationDbContext());




    }
}
