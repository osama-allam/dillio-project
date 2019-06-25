using Dillio_Backend.BLL.Core.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Dillio_Backend.DAL.Persistence.EntityConfigurations
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.ToTable("Product");

            builder.HasKey(p => p.Id);


            builder.Property(p => p.Name)
                .HasColumnType("nvarchar(50)")
                .IsRequired();

            builder.Property(p => p.CategoryId)
                .HasColumnName("FK_CategoryId");

            builder.HasMany(p => p.Specs)
                .WithOne(s => s.Product)
                .HasForeignKey(s => s.ProductId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(p => p.Reviews)
                .WithOne(r => r.Product)
                .HasForeignKey(r => r.ProductId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(p => p.Images)
                .WithOne(i => i.Product)
                .HasForeignKey(i => i.ProductId)
                .OnDelete(DeleteBehavior.Restrict);

            //customer has many products
        }
    }
}
