using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dillio_Backend.API.ViewModel;
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
          
            IList<Product> pro = _unitOfWork.Products.GetAll().ToList();
            foreach (var product in pro)
            {
                IList<Image> images = _unitOfWork.Images.GetAll().Where(i => i.ProductId == product.Id).ToList();
                    foreach (var proimage in images)
                    {
                        product.Images.Add(proimage);
                    }                          
            }
            if (pro.Count == 0)
            {
                return NotFound();
            }
            IList<ProductViewModel> pvm = pro.Select(p => new ProductViewModel
            {
                Price = p.Price,
                Discount = p.Discount,
                Name = p.Name,
                Description = p.Description,
                Image = p.Images.FirstOrDefault(),
                Images = p.Images.ToList()

            }).ToList();
            return Ok(pvm);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Product pro = _unitOfWork.Products.Get(id);

            if (pro == null)
            {
                return NotFound();
            }

            
            IList<Image> images = _unitOfWork.Images.GetAll().Where(i => i.ProductId == id).ToList();
            pro.Images = images;

          

            ProductViewModel pvm = new ProductViewModel()
            {
                Price = pro.Price,
                Discount = pro.Discount,
                Name = pro.Name,
                Description = pro.Description,
                Images = pro.Images.ToList()
            };

            return Ok(pvm);
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
        public IActionResult Put(int id, [FromBody] ProductViewModel pvm)
        {
            Product pro = _unitOfWork.Products.Get(id);

            if (pro != null)
            {
                pro.Name = pvm.Name;
                pro.Discount = pvm.Discount;
                pro.Price = pvm.Price;
 
                _unitOfWork.Complete();

                return Ok();
            }

            return NotFound();


        }
    }
}