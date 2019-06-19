using System;
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
    public class ProductController : ControllerBase
    {
        readonly UnitOfWork _unitOfWork = new UnitOfWork(new ApplicationDbContext());


        [HttpGet]
        public IActionResult Get()
        {
            IList<Product> pro = null;

            pro = _unitOfWork.Products.GetAll().ToList();

            if (pro.Count == 0)
            {
                return NotFound();
            }
             
            return Ok(pro);
        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Product pro = null;

            pro = _unitOfWork.Products.Get(id);

            if (pro == null)
            {
                return NotFound();
            }

            return Ok(pro);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Product product)
        {
            if (product == null)
            {
                return BadRequest();
            }

           _unitOfWork.Products.Add(product);
           _unitOfWork.Complete();
           return Ok();

        }


        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Product product)
        {
            Product pro = _unitOfWork.Products.Get(id);

            if (pro != null)
            {
                pro.Name = product.Name;
                pro.Discount = product.Discount;
                pro.Price = product.Price;
                pro.Category = product.Category;
                pro.Images = product.Images;
                pro.Reviews = product.Reviews;

                _unitOfWork.Complete();

                return Ok();
            }

            return NotFound();


        }
    }
}