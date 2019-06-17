using System.Data.Entity.ModelConfiguration;
using DillioRepository.Core.Domain;

namespace DillioRepository.Persistence.EntityConfigurations
{
    public class ReviewConfigurations:EntityTypeConfiguration<Review>
    {
        public ReviewConfigurations()
        {
            ToTable("Review");

            HasKey(r => r.Id);

            Property(r => r.Name)
                .HasColumnType("nvarchar");


        }
    }
}