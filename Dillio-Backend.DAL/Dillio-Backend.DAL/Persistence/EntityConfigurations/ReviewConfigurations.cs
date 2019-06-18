using Dillio_Backend.BLL.Core.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Dillio_Backend.DAL.Persistence.EntityConfigurations
{
    public class ReviewConfigurations:IEntityTypeConfiguration<Review>
    {
        public void Configure(EntityTypeBuilder<Review> builder)
        {

            builder.ToTable("Review");

            builder.HasKey(r => r.Id);

            builder.Property(r => r.Name)
                .HasColumnType("nvarchar");

        }
    }
}