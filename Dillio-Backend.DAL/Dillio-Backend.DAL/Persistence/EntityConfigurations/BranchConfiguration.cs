using Dillio_Backend.BLL.Core.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Dillio_Backend.DAL.Persistence.EntityConfigurations
{
    public class BranchConfiguration:IEntityTypeConfiguration<Branches>
    {
        public void Configure(EntityTypeBuilder<Branches> builder)
        {
            builder.ToTable("Branch");

            builder.HasKey(c => c.Id);


            builder.Property(p => p.Name)
                .HasColumnType("nvarchar(50)")
                .IsRequired();

            builder.Property(p => p.Address)
                .HasColumnType("nvarchar(250)")
                .IsRequired();

            builder.Property(p => p.PhoneNumber)
                .HasColumnType("nvarchar(50)")
                .IsRequired();

        }
    }
}