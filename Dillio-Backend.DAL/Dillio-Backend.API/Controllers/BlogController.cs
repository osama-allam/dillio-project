using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dillio_Backend.API.ViewModel;
using Dillio_Backend.BLL.Core;
using Dillio_Backend.BLL.Core.Domain;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Dillio_Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public BlogController(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }
        //public IActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet]
        public IActionResult Get()
        {

            var blogs = _unitOfWork.Blogs.GetAll().ToList();

            if (blogs.Count == 0)
            {
                return NotFound();
            }

            return Ok(blogs);
        }

        [HttpPost]
        [Route("Add")]
        public IActionResult post([FromBody] BlogViewModel bvm)
        {
            if (bvm == null)
            {
                return BadRequest();
            }

            Blog bg = new Blog()
            {
                PostName = bvm.postName,
                Description = bvm.description,
                Date = bvm.date,
                Name = "post 1",
                FK_UserId = User.Identity.GetUserId()
            };
          
            _unitOfWork.Blogs.Add(bg);
            _unitOfWork.Complete();
            return Ok();

        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Blog blog)
        {
            Blog oldblog = _unitOfWork.Blogs.Get(id);

            if (oldblog != null)
            {
                oldblog.Name = oldblog.Name;
                //need to review this part again
                _unitOfWork.Complete();

                return Ok();
            }

            return NotFound();
        }
    }
}