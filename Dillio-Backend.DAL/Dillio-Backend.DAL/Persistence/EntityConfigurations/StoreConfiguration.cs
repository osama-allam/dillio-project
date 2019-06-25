using Dillio_Backend.BLL.Core.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Dillio_Backend.DAL.Persistence.EntityConfigurations
{
    public class StoreConfiguration:IEntityTypeConfiguration<Store>
    {
        
        public void Configure(EntityTypeBuilder<Store> builder)
        {

            builder.ToTable("Store");

            builder.HasKey(s => s.Id);

            builder.Property(s => s.Name)
                .HasColumnType("nvarchar(50)")
                .IsRequired();

            builder.HasMany(c => c.Branches)
                .WithOne(p => p.Store)
                .HasForeignKey(p => p.StoreId)
                .OnDelete(DeleteBehavior.Cascade);


            builder.HasMany(c => c.Reviews)
                .WithOne(p => p.Store)
                .HasForeignKey(p => p.StoreId)
                .OnDelete(DeleteBehavior.Cascade);
        }




    }
}
