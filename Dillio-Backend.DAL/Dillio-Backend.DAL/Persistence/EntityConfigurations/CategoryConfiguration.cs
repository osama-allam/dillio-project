using Dillio_Backend.BLL.Core.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Dillio_Backend.DAL.Persistence.EntityConfigurations
{
    public class CategoryConfiguration: IEntityTypeConfiguration<Category>
    {
       

        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.ToTable("Category");

            builder.HasKey(c => c.Id);


            builder.Property(p => p.Name)
                .HasColumnType("nvarchar(50)")          
                .IsRequired();

            builder.HasMany(c => c.Products)
                .WithOne(p => p.Category)
                .HasForeignKey(p => p.FK_CategoryId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
