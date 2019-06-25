using Dillio_Backend.BLL.Core.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Dillio_Backend.DAL.Persistence.EntityConfigurations
{
    public class ProductStoreConfiguration:IEntityTypeConfiguration<ProductStore>
    {
        public void Configure(EntityTypeBuilder<ProductStore> builder)
        {
            builder.ToTable("ProductStore");

            builder.HasKey(sc => new {sc.ProductId, sc.StoreId});

            builder.HasOne(p => p.Product)
                .WithMany(s => s.ProductStores)
                .HasForeignKey(p => p.ProductId);

            builder.HasOne(p => p.Store)
                .WithMany(s => s.ProductStores)
                .HasForeignKey(p => p.StoreId);
        }
    }
}