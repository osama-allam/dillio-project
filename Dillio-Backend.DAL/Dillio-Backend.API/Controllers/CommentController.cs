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
    public class CommentController : ControllerBase
    {
        readonly UnitOfWork _unitOfWork = new UnitOfWork(new ApplicationDbContext());


        [HttpGet]
        public IActionResult Get()
        {
            IList<Comment> com = null;

            com = _unitOfWork.Comments.GetAll().ToList();

            if (com.Count == 0)
            {
                return NotFound();
            }
             
            return Ok(com);
        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            IList<Comment> com  = null;

            com = _unitOfWork.Comments.GetCommentsOnBlog(id).ToList();

            if (com == null)
            {
                return NotFound();
            }

            return Ok(com);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Comment comment)
        {
            if (comment == null)
            {
                return BadRequest();
            }

           _unitOfWork.Comments.Add(comment);
           _unitOfWork.Complete();
           return Ok();

        }


        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Comment comment)
        {
            Comment com = _unitOfWork.Comments.Get(id);

            if (com != null)
            {
                com.Blog = comment.Blog;
                com.BlogId = comment.BlogId;
                com.FK_UserId = comment.FK_UserId;
                com.Text = comment.Text;
                com.User = comment.User;
                

                _unitOfWork.Complete();

                return Ok();
            }

            return NotFound();


        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Comment com = _unitOfWork.Comments.Get(id);
            
            if (com != null)
            {
                _unitOfWork.Comments.Remove(com);
                _unitOfWork.Complete();

                return Ok();
            } 

            return NotFound();
        }
    }
}
