using System;
using System.Collections.Generic;
using System.Data.Entity;
//using System.Data.Entity;
using System.Text;
using DAL_Dillio_Project.Core.Domain;
using DAL_Dillio_Project.Persistence.EntityConfigurations;
using DillioBackendRepository.Core.Domain;
using DillioBackendRepository.Persistence.EntityConfigurations;
using DillioRepository.Core.Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace DillioCore.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public virtual Microsoft.EntityFrameworkCore.DbSet<Blog> Blogs { get; set; }
        public virtual Microsoft.EntityFrameworkCore.DbSet<Category> Categories { get; set; }
        public virtual Microsoft.EntityFrameworkCore.DbSet<Comment> Comments { get; set; }
        public virtual Microsoft.EntityFrameworkCore.DbSet<Image> Images { get; set; }
        public virtual Microsoft.EntityFrameworkCore.DbSet<Like> Likes { get; set; }
        public virtual Microsoft.EntityFrameworkCore.DbSet<Product> Products { get; set; }
        public virtual Microsoft.EntityFrameworkCore.DbSet<Store> Stores { get; set; }
        public virtual Microsoft.EntityFrameworkCore.DbSet<Order> Orders { get; set; }
        public virtual Microsoft.EntityFrameworkCore.DbSet<Review> Reviews { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            //modelBuilder.Configurations.Add(new BlogConfiguration());
            //modelBuilder.Configurations.Add(new CategoryConfiguration());
            //modelBuilder.Configurations.Add(new CommentConfiguration());
            //modelBuilder.Configurations.Add(new ImageConfiguration());
            //modelBuilder.Configurations.Add(new LikeConfiguration());
            //modelBuilder.Configurations.Add(new ProductConfiguration());
            //modelBuilder.Configurations.Add(new StoreConfiguration());
        }

    }
}
