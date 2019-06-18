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
                .HasColumnType("nvarchar")
                .HasMaxLength(50)
                .IsRequired();



            builder.HasOne(i => i.Image)
                .WithOne(i => i.Store)
                .HasForeignKey<Image>(i => i.StoreId)
                .OnDelete(DeleteBehavior.Cascade);

        }




    }
}
