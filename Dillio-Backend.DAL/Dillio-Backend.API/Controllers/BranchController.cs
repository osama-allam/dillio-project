using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dillio_Backend.BLL.Core;
using Dillio_Backend.BLL.Core.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dillio_Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BranchController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public BranchController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("store/{storeId}")]
        //[ActionName("Get")]
        public IActionResult Get(int storeId)
        {
            IList<Branches> branches = null;

            branches = _unitOfWork.Branches.GetAll().Where(s => s.StoreId == storeId).ToList();

            if (branches.Count == 0)
            {
                return NotFound();
            }
           
            return Ok(branches);
        }
    }
}