using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Dillio_Backend.BLL.Core.Domain;
using Dillio_Backend.DAL.Persistence.EntityConfigurations;

namespace Dillio_Backend.DAL
{
   public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext()
        {
            
        }

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

       // Add the DbSets for the application
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public virtual DbSet<Blog> Blogs { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Comment> Comments { get; set; }
        public virtual DbSet<Image> Images { get; set; }
        public virtual DbSet<Like> Likes { get; set; }
        public  virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Store> Stores { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Review> Reviews { get; set; }





        //Configuring the database
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server =.; Database = DillioDB; Trusted_Connection = True; MultipleActiveResultSets = true;");
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);


            builder.ApplyConfiguration(new BlogConfiguration());
            builder.ApplyConfiguration(new CategoryConfiguration());
            builder.ApplyConfiguration(new CommentConfiguration());
            builder.ApplyConfiguration(new ImageConfiguration());
            builder.ApplyConfiguration(new LikeConfiguration());
            builder.ApplyConfiguration(new ProductConfiguration());
            builder.ApplyConfiguration(new ReviewConfigurations());
            builder.ApplyConfiguration(new StoreConfiguration());
            builder.ApplyConfiguration(new UserConfiguration());
        }
    }
}
