using DAL_Dillio_Project.Core.Repositories;
using DillioRepository.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DillioRepository.Core.Repositories
{
    public interface IOrderRepository:IRepository<Order>
    {
    }
}
