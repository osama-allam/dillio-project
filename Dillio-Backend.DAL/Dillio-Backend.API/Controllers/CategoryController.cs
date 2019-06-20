using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dillio_Backend.BLL.Core.Domain;
using Dillio_Backend.DAL;
using Dillio_Backend.DAL.Persistence;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dillio_Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        readonly UnitOfWork _unitOfWork = new UnitOfWork(new ApplicationDbContext());


        [HttpGet]
        public IActionResult Get()
        {
            IList<Category> categories = null;

            categories = _unitOfWork.Categories.GetAll().ToList();

            if (categories.Count == 0)
            {
                return NotFound();
            }

            return Ok(categories);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Category category = null;

            category = _unitOfWork.Categories.Get(id);

            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Category category)
        {
            if (category == null)
            {
                return BadRequest();
            }

            _unitOfWork.Categories.Add(category);
            _unitOfWork.Complete();
            return Ok();

        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Category category)
        {
            Category oldcategory = _unitOfWork.Categories.Get(id);

            if (oldcategory != null)
            {
                oldcategory.Name = category.Name;
               //need to review this part again
                _unitOfWork.Complete();

                return Ok();
            }

            return NotFound();
        }
    }
}