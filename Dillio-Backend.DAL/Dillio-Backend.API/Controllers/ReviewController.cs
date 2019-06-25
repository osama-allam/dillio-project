using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dillio_Backend.API.ViewModel;
using Dillio_Backend.BLL.Core;
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

        private readonly IUnitOfWork _unitOfWork;

        public ReviewController(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        [HttpGet("product/{productId}")]
        public IActionResult Get(int productId)
        {
            IList<Review> reviews = null;

            reviews = _unitOfWork.Reviews.GetAll().Where(r=>r.ProductId == productId).ToList();

            if (reviews.Count == 0)
            {
                return NotFound();
            }

            return Ok(reviews);
        }

        [HttpGet("store/{storeId}")]
        [ActionName("Get")]
        public IActionResult GetAllReviewOfStore(int storeId)
        {
            IList<Review> reviews = null;

            reviews = _unitOfWork.Reviews.GetAll().Where(r => r.ProductId == storeId).ToList();

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
        public IActionResult Post([FromBody] ReviewViewModel rvm,int productId)
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
                    Rating =  rvm.Rating                                                
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