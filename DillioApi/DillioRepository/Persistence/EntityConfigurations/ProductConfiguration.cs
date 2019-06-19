using DAL_Dillio_Project.Core.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace DAL_Dillio_Project.Persistence.EntityConfigurations
{
    public class ProductConfiguration:EntityTypeConfiguration<Product>
    {
        public ProductConfiguration()
        {
            ToTable("Product");

            HasKey(p => p.Id);


            Property(p => p.Name)
                .HasColumnType("nvarchar")
                .HasMaxLength(50)
                .IsRequired();

            HasMany(p=>p.Reviews)
                .WithRequired(r=>r.Product)
                .HasForeignKey(r=>r.FK_ProductId)
                .WillCascadeOnDelete(false);

            HasMany(p=>p.Images)
                .WithRequired(i=>i.Product)
                .HasForeignKey(i=>i.ProductId)
                .WillCascadeOnDelete(false);

            //customer has many products

        }
    }
}
