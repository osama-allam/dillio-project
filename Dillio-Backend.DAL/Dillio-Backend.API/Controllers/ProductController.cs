using AutoMapper;
using Dillio_Backend.API.ViewModel;
using Dillio_Backend.BLL.Core;
using Dillio_Backend.BLL.Core.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Dillio_Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ProductController : ControllerBase
    {

        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ProductController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [Authorize]
        [HttpGet]
        public IActionResult Get()
        {
            IList<Product> pro = _unitOfWork.Products.GetAll().ToList();

            if (pro.Count == 0)
            {
                return NotFound();
            }

            foreach (var product in pro)
            {
                IList<Image> images = _unitOfWork.Images.GetAll().Where(i => i.ProductId == product.Id).ToList();
                foreach (var productImage in images)
                {
                    product.Images.Add(productImage);
                }
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
            if (id == 0 || id == null)
            {
                return BadRequest();
            }

            var repoProduct = _unitOfWork.Products.GetSingleProductWithJoins(id);

            if (repoProduct == null)
            {
                return NotFound();
            }

            ProductEditViewModel productToReturn = _mapper.Map<ProductEditViewModel>(repoProduct);

            return Ok(productToReturn);
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

        [HttpGet("category/{categoryId}")]
        [ActionName("Get")]
        public IActionResult GetProductOfCategory(int categoryId)
        {
            IList<Product> categoryProducts =
                _unitOfWork.Products.GetAll()
                    .Where(s => s.CategoryId == categoryId)
                    .ToList();

            if (categoryProducts.Count == 0)
            {
                return NotFound();
            }

            foreach (var product in categoryProducts)
            {
                IList<Image> images = _unitOfWork.Images.GetAll().Where(i => i.ProductId == product.Id).ToList();
                foreach (var productImage in images)
                {
                    product.Images.Add(productImage);
                }
            }

            IList<ProductViewModel> pvm = categoryProducts.Select(s => new ProductViewModel()
            {
                Id = s.Id,
                Name = s.Name,
                Description = s.Description,
                Price = s.Price,
                Discount = s.Discount,
                Images = s.Images.ToList(),
                Image = s.Images.FirstOrDefault()

            }).ToList();

            return Ok(pvm);
        }

    }

}