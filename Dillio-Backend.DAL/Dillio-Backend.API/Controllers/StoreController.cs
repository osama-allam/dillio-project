using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Dillio_Backend.BLL.Core;
using Dillio_Backend.BLL.Core.Domain;
using Dillio_Backend.DAL;
using Dillio_Backend.DAL.Persistence;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dillio_Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoreController : ControllerBase
    {

        private readonly IUnitOfWork _unitOfWork;

        public StoreController(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }


        [HttpGet]
        public IActionResult Get()

        {
            IList<Store> store = null;
         
            store = _unitOfWork.Stores.GetAll().ToList();

            if (store.Count == 0)
            {
                return NotFound();
            }
    

            return Ok(store);
        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Store store = null;

            store = _unitOfWork.Stores.Get(id);

            if (store == null)
            {
                return NotFound();
            }

            return Ok(store);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Store store)
        {
            if (store == null)
            {
                return BadRequest();
            }

            _unitOfWork.Stores.Add(store);
            _unitOfWork.Complete();
            return Ok();

        }


        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Store store)
        {
            Store oldstore = _unitOfWork.Stores.Get(id);

            if (oldstore != null)
            {
                oldstore.Name = store.Name;
                oldstore.Url = store.Url;
                

                _unitOfWork.Complete();

                return Ok();
            }

            return NotFound();
        }

    }
}