using DAL_Dillio_Project.Core.Domain;
using DAL_Dillio_Project.Persistence.EntityConfigurations;
using DillioBackendRepository.Core.Domain;
using DillioBackendRepository.Persistence.EntityConfigurations;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;

namespace DAL_Dillio_Project.Persistence
{
    public class DillioContext : DbContext
    {
        public DillioContext() : base("name=DillioContext")
        {
            this.Configuration.LazyLoadingEnabled = false;
        }

        public virtual DbSet<Blog> Blogs { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Comment> Comments { get; set; }
        public virtual DbSet<Image> Images { get; set; }
        public virtual DbSet<Like> Likes { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Store> Stores { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new BlogConfiguration());
            modelBuilder.Configurations.Add(new CategoryConfiguration());
            modelBuilder.Configurations.Add(new CommentConfiguration());
            modelBuilder.Configurations.Add(new ImageConfiguration());
            modelBuilder.Configurations.Add(new LikeConfiguration());
            modelBuilder.Configurations.Add(new ProductConfiguration());
            modelBuilder.Configurations.Add(new StoreConfiguration());
        }

    }
}
