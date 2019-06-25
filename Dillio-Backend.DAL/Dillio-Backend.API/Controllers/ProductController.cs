using AutoMapper;
using Dillio_Backend.API.Configurations;
using Dillio_Backend.API.ViewModel;
using Dillio_Backend.BLL.Core;
using Dillio_Backend.BLL.Core.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Dillio_Backend.API.Controllers
{
    [Route("api/product")]
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

        [Authorize(Roles = Role.Admin)]
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

        [HttpGet("{id}", Name = "GetProduct")]
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
        public IActionResult Post(ProductEditViewModel product)
        {
            if (product == null)
            {
                return BadRequest();
            }

            var productToAdd = _mapper.Map<Product>(product);

            _unitOfWork.Products.Add(productToAdd);
            if (_unitOfWork.Complete() > 0)
            {
                var productToReturn = _mapper.Map<ProductEditViewModel>(productToAdd);
                return CreatedAtRoute("GetProduct", new { id = productToAdd.Id }, productToReturn);

            }
            return BadRequest("Couldn't add product");
        }


        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] ProductEditViewModel product)
        {
            var repoProduct = _unitOfWork.Products.Get(id);
            if (repoProduct == null)
            {
                return BadRequest();
            }

            var repoSpecs = _unitOfWork.Specs.GetAll().Where(s => s.ProductId == id).ToList();
            var repoImages = _unitOfWork.Images.GetAll().Where(i => i.ProductId == id).ToList();
            _unitOfWork.Specs.RemoveRange(repoSpecs);
            _unitOfWork.Images.RemoveRange(repoImages);

            var productPartial = _mapper.Map<ProductPartialUpdate>(product);
            var productToUpdate = _unitOfWork.Products.Get(id);
            _mapper.Map(productPartial, productToUpdate,
                typeof(ProductPartialUpdate), typeof(Product));

            try
            {
                _unitOfWork.Complete();
            }
            catch (Exception ex)
            {
                return BadRequest("Product not updated!");
            }
            var updateSpecs = _mapper.Map<IList<Specs>>(product.Specs);
            var updateImages = _mapper.Map<IList<Image>>(product.Images);
            foreach (var updateImage in updateImages)
            {
                updateImage.ProductId = id;
            }
            foreach (var updateSpec in updateSpecs)
            {
                updateSpec.ProductId = id;
            }
            _unitOfWork.Specs.AddRange(updateSpecs);
            _unitOfWork.Images.AddRange(updateImages);

            try
            {
                _unitOfWork.Complete();
            }
            catch (Exception ex)
            {
                return BadRequest("Product not updated!");
            }

            return NoContent();

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