using Dillio_Backend.BLL.Core;
using Dillio_Backend.BLL.Core.Domain;
using System;
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
                unitOfWork.Complete();
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
                unitOfWork.Complete();
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
                unitOfWork.Complete();
            }

            if (!unitOfWork.Stores.GetAll().Any())
            {
                var stores = new List<Store>
                {
                    new Store
                    {
                        Name="store1",
                        Description="description",
                        Url="egypt.souq.com",
                        StarRating=3
                    },
                    new Store
                    {
                        Name="store2",
                        Description="description",
                        Url="egypt.souq.com",
                        StarRating=3
                    },
                    new Store
                    {
                        Name="store3",
                        Description="description",
                        Url="egypt.souq.com",
                        StarRating=3
                    }
                };
                unitOfWork.Stores.AddRange(stores);
                unitOfWork.Complete();
            }
            if (!unitOfWork.Reviews.GetAll().Any())
            {
                var storeId = unitOfWork.Stores.GetAll().FirstOrDefault().Id;
                var reviews = new List<Review>
                {
                    new Review
                    {
                        ReviewDescription = "user review",
                        Name="User1",
                        ProductId=1,
                        Rating=3,
                        ReviewDate=DateTime.Now,
                        StoreId=storeId,
                        UserId= new Guid("8743d820-b4a1-432b-885b-84a34c3ecdfc").ToString(),
                        Email="admin@dillio.com"
                    },
                    new Review
                    {
                        ReviewDescription = "user review",
                        Name="User1",
                        ProductId=1,
                        Rating=3,
                        ReviewDate=DateTime.Now,
                        StoreId=storeId,
                        UserId= new Guid("8743d820-b4a1-432b-885b-84a34c3ecdfc").ToString(),
                        Email="admin@dillio.com"
                    },
                    new Review
                    {
                        ReviewDescription = "user review",
                        Name="User1",
                        ProductId=1,
                        Rating=3,
                        ReviewDate=DateTime.Now,
                        StoreId=storeId,
                        UserId= new Guid("8743d820-b4a1-432b-885b-84a34c3ecdfc").ToString(),
                        Email="admin@dillio.com"
                    },
                };
                unitOfWork.Reviews.AddRange(reviews);
                unitOfWork.Complete();
            }
        }
    }
}