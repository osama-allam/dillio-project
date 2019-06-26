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
    public class LikesController : ControllerBase
    {
        readonly UnitOfWork _unitOfWork = new UnitOfWork(new ApplicationDbContext());


        [HttpGet]
        public IActionResult Get()
        {
            IList<Like> lik = null;

            lik = _unitOfWork.Likes.GetAll().ToList();

            if (lik.Count == 0)
            {
                return NotFound();
            }
             
            return Ok(lik);
        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            IList<Like> lik  = null;

            lik = _unitOfWork.Likes.GetLikesOnBlog(id).ToList();

            if (lik == null)
            {
                return NotFound();
            }

            return Ok(lik);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Like like)
        {
            if (like == null)
            {
                return BadRequest();
            }

           _unitOfWork.Likes.Add(like);
           _unitOfWork.Complete();
           return Ok();

        }

        //no need to update how can u update a like if it's only 1 or zero (there is a like or not)


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Like lik = _unitOfWork.Likes.Get(id);
            
            if (lik != null)
            {
                _unitOfWork.Likes.Remove(lik);
                _unitOfWork.Complete();

                return Ok();
            } 

            return NotFound();
        }
    }
}