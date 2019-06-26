using AutoMapper;
using Dillio_Backend.API.ViewModel;
using Dillio_Backend.BLL.Core;
using Dillio_Backend.BLL.Core.Domain;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Dillio_Backend.API.Controllers
{
    [Route("api/review")]
    [ApiController]
    public class ReviewController : ControllerBase
    {

        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ReviewController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this._unitOfWork = unitOfWork;
            _mapper = mapper;
        }



        [HttpGet("product/{id}")]
        public IActionResult Get(int id)
        {
            if (id == 0 || id == null)
            {
                return BadRequest();
            }
            var reviews = _unitOfWork.Reviews.GetAll().Where(r => r.ProductId == id);
            if (reviews.Count() != 0)
            {
                var reviewsToReturn = _mapper.Map<IEnumerable<ReviewViewModel>>(reviews);
                return Ok(reviewsToReturn);
            }

            return NotFound();
        }

        [HttpGet("store/{storeId}")]
        [ActionName("Get")]
        public IActionResult GetAllReviewOfStore(int storeId)
        {
            IList<Review> reviews = null;

            reviews = _unitOfWork.Reviews.GetAll().Where(r => r.StoreId == storeId).ToList();

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



        [HttpPost("product/{productId}")]
        public IActionResult Post([FromBody] ReviewViewModel rvm, int productId)
        {

            if (rvm != null)
            {
                Review review = new Review
                {
                    Name = rvm.Name,
                    Email = rvm.Email,
                    ReviewDescription = rvm.ReviewDescription,
                    UserId = User.Identity.GetUserId(),
                    ProductId = productId
                };

                _unitOfWork.Reviews.Add(review);
                _unitOfWork.Complete();
                return Ok();
            }

            return NotFound();

        }

        [HttpPost("store/{storeId}")]
        [ActionName("Post")]
        public IActionResult AddReviewOnStore([FromBody] ReviewViewModel rvm, int storeId)
        {

            if (rvm != null)
            {
                Review review = new Review
                {
                    ReviewDescription = rvm.ReviewDescription,
                    Name = rvm.Name,
                    Email = rvm.Email,
                    ProductId = 1,
                    UserId = User.Identity.GetUserId(),
                    StoreId = storeId,
                    ReviewDate = DateTime.Now,
                    Rating = rvm.Rating
                };

                _unitOfWork.Reviews.Add(review);
                _unitOfWork.Complete();
                return Ok();
            }

            return NotFound();

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Review review = _unitOfWork.Reviews.Get(id);

            if (review == null)
            {
                return NotFound();
            }

            _unitOfWork.Reviews.Remove(review);
            _unitOfWork.Complete();
            return Ok(review);
        }
    }
}