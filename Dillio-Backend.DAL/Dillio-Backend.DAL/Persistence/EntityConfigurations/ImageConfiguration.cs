using Dillio_Backend.BLL.Core.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Dillio_Backend.DAL.Persistence.EntityConfigurations
{
    public class ImageConfiguration : IEntityTypeConfiguration<Image>
    {
        public void Configure(EntityTypeBuilder<Image> builder)
        {
            builder.ToTable("Image");

            builder.HasKey(i => i.Id);

            builder.Property(i => i.Url)
                .HasColumnType("nvarchar(100)")
                .IsRequired();

            builder.Property(i => i.ProductId)
                .HasColumnName("FK_ProductId");

        }
    }
}
