﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dillio_Backend.API.ViewModel;
using Dillio_Backend.BLL.Core.Domain;
using Dillio_Backend.DAL;
using Dillio_Backend.DAL.Persistence;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dillio_Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {

        readonly UnitOfWork _unitOfWork = new UnitOfWork(new ApplicationDbContext());

        [HttpGet("product/{productId}")]
        public IActionResult Get(int productId)
        {
            IList<Review> reviews = null;

            reviews = _unitOfWork.Reviews.GetAll().Where(r=>r.FK_ProductId == productId).ToList();

            if (reviews.Count == 0)
            {
                return NotFound();
            }

            return Ok(reviews);
        }


        [HttpGet("{id}")]
        [ActionName("Get")]
        public IActionResult GetSingleReview(int id)
        {
            Review review = null;

            review = _unitOfWork.Reviews.Get(id);

            if (review == null)
            {
                return NotFound();
            }

            return Ok(review);
        }



        [HttpPost("{productId}")]
        public IActionResult Post([FromBody] ReviewViewModel rvm,int productId)
        {

            if (rvm != null)
            {
                Review review = new Review
                {
                    Name = rvm.Name,
                    Email = rvm.Email,
                    ReviewDescription = rvm.ReviewDescription,
                    FK_UserId = User.Identity.GetUserId(),
                    FK_ProductId = productId
                };

                _unitOfWork.Reviews.Add(review);
                _unitOfWork.Complete();
                return Ok();
            }

            return NotFound();

        }
    }
}