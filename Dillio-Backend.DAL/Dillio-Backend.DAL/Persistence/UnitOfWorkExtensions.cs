using Dillio_Backend.BLL.Core;
using Dillio_Backend.BLL.Core.Domain;
using System.Collections.Generic;
using System.Linq;

namespace Dillio_Backend.DAL.Persistence
{
    public static class UnitOfWorkExtensions
    {
        public static void EnsureSeedDataForContext(this IUnitOfWork unitOfWork)
        {
            if (!unitOfWork.Categories.GetAll().Any())
            {
                var categories = new List<Category>
                {
                    new Category {Name="Laptop"},
                    new Category {Name="TV & Audio"},
                    new Category {Name="Books"},
                    new Category {Name="Electronics"},
                    new Category {Name="Womens Fashion"},
                    new Category {Name="Mens Fashion"},
                    new Category {Name="Health & Household'"},
                    new Category {Name="Home & Kitchen"},
                    new Category {Name="Sports & Outdoors"},
                    new Category {Name="Tools & Home Improvement"},
                    new Category {Name="Toys & Games"}
                };
                unitOfWork.Categories.AddRange(categories);
            }

            if (!unitOfWork.Products.GetAll().Any())
            {
                var products = new List<Product>
                {
                    new Product {Name="Product 1",Price= 1000,Discount = 100, Description = "This is description", CategoryId = 1},
                    new Product {Name="Product 2",Price= 1000,Discount = 100, Description = "This is description", CategoryId = 1},
                    new Product {Name="Product 3",Price= 1000,Discount = 100, Description = "This is description", CategoryId = 1},
                    new Product {Name="Product 4",Price= 1000,Discount = 100, Description = "This is description", CategoryId = 1},
                    new Product {Name="Product 5",Price= 1000,Discount = 100, Description = "This is description", CategoryId = 1},
                    new Product {Name="Product 6",Price= 1000,Discount = 100, Description = "This is description", CategoryId = 1},
                    new Product {Name="Product 7",Price= 1000,Discount = 100, Description = "This is description", CategoryId = 1},
                    new Product {Name="Product 8",Price= 1000,Discount = 100, Description = "This is description", CategoryId = 1},
                    new Product {Name="Product 9",Price= 1000,Discount = 100, Description = "This is description", CategoryId = 1},
                    new Product {Name="Product 10",Price= 1000,Discount = 100, Description = "This is description", CategoryId = 1}
                };
                unitOfWork.Products.AddRange(products);
            }

            if (!unitOfWork.Specs.GetAll().Any())
            {

                var specs = new List<Specs>
                {
                    new Specs {Name = "spec 1", Value = "value 1", ProductId = 1},
                    new Specs {Name = "spec 2", Value = "value 2", ProductId = 1},
                    new Specs {Name = "spec 3", Value = "value 3", ProductId = 1},
                    new Specs {Name = "spec 4", Value = "value 4", ProductId = 1},
                    new Specs {Name = "spec 5", Value = "value 5", ProductId = 1},


                    new Specs {Name = "spec 1", Value = "value 1", ProductId = 2},
                    new Specs {Name = "spec 2", Value = "value 2", ProductId = 2},
                    new Specs {Name = "spec 3", Value = "value 3", ProductId = 2},
                    new Specs {Name = "spec 4", Value = "value 4", ProductId = 2},
                    new Specs {Name = "spec 5", Value = "value 5", ProductId = 2},

                    new Specs {Name = "spec 1", Value = "value 1", ProductId = 3},
                    new Specs {Name = "spec 2", Value = "value 2", ProductId = 3},
                    new Specs {Name = "spec 3", Value = "value 3", ProductId = 3},
                    new Specs {Name = "spec 4", Value = "value 4", ProductId = 3},
                    new Specs {Name = "spec 5", Value = "value 5", ProductId = 3},

                    new Specs {Name = "spec 1", Value = "value 1", ProductId = 4},
                    new Specs {Name = "spec 2", Value = "value 2", ProductId = 4},
                    new Specs {Name = "spec 3", Value = "value 3", ProductId = 4},
                    new Specs {Name = "spec 4", Value = "value 4", ProductId = 4},
                    new Specs {Name = "spec 5", Value = "value 5", ProductId = 4},

                    new Specs {Name = "spec 1", Value = "value 1", ProductId = 5},
                    new Specs {Name = "spec 2", Value = "value 2", ProductId = 5},
                    new Specs {Name = "spec 3", Value = "value 3", ProductId = 5},
                    new Specs {Name = "spec 4", Value = "value 4", ProductId = 5},
                    new Specs {Name = "spec 5", Value = "value 5", ProductId = 5},
                };
                unitOfWork.Specs.AddRange(specs);
            }

            unitOfWork.Complete();
        }
    }
}