using Dillio_Backend.BLL.Core.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Dillio_Backend.DAL.Persistence.EntityConfigurations
{
    public class ImageConfiguration:IEntityTypeConfiguration<Image>
    {
        public void Configure(EntityTypeBuilder<Image> builder)
        {
            builder.ToTable("Image");

            builder.HasKey(i => i.Id);

            builder.Property(i => i.Url)
                .HasColumnType("nvarchar")
                .HasMaxLength(100)
                .IsRequired();


            builder.HasOne(i => i.Store)
                .WithOne(i => i.Image)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(b => b.Blog)
                .WithOne(c => c.Image)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
