using Dillio_Backend.BLL.Core.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Dillio_Backend.DAL.Persistence.EntityConfigurations
{
    public class SpecsConfigurations : IEntityTypeConfiguration<Specs>
    {
        public void Configure(EntityTypeBuilder<Specs> builder)
        {
            builder.ToTable("Specs");

            builder.Property(s => s.Name)
                .IsRequired();

            builder.Property(s => s.Value)
                .IsRequired();

            builder.Property(s => s.ProductId)
                .HasColumnName("FK_ProductId");
        }
    }
}