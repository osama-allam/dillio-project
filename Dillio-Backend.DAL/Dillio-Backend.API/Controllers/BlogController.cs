﻿using System;
using System.Collections;
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
    public class BlogController : ControllerBase
    {
        readonly UnitOfWork _unitOfWork = new UnitOfWork(new ApplicationDbContext());


        [HttpGet]
        public IActionResult Get()
        {
            IList<Blog> blo = null;

            blo = _unitOfWork.Blogs.GetAll().ToList();

            if (blo.Count == 0)
            {
                return NotFound();
            }
             
            return Ok(blo);
        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Blog blo = null;

            blo = _unitOfWork.Blogs.Get(id);

            if (blo == null)
            {
                return NotFound();
            }

            return Ok(blo);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Blog blog)
        {
            if (blog == null)
            {
                return BadRequest();
            }

           _unitOfWork.Blogs.Add(blog);
           _unitOfWork.Complete();
           return Ok();

        }


        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Blog blog)
        {
            Blog blo = _unitOfWork.Blogs.Get(id);

            if (blo != null)
            {
                blo.Comments = blog.Comments;
                blo.Description = blog.Description;
                blo.FK_UserId = blog.FK_UserId;
                blo.ImageURL = blog.ImageURL;
                blo.Likes = blog.Likes;
                blo.TimeOfBLog = blog.TimeOfBLog;
                blo.Title = blog.Title;
                blo.User = blog.User;

                _unitOfWork.Complete();

                return Ok();
            }

            return NotFound();


        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Blog blo = _unitOfWork.Blogs.Get(id);
            
            if (blo != null)
            {
                _unitOfWork.Blogs.Remove(blo);
                _unitOfWork.Complete();

                return Ok();
            } 

            return NotFound();
        }

    }
}