using DillioBackendRepository.Core.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace DillioBackendRepository.Persistence.EntityConfigurations
{
    public class CategoryConfiguration:EntityTypeConfiguration<Category>
    {
        public CategoryConfiguration()
        {
            ToTable("Category");

            HasKey(c => c.Id);


            Property(p => p.Name)
                .HasColumnType("nvarchar")
                .HasMaxLength(50)
                .IsRequired();

            HasMany(c => c.Products)
                .WithRequired(p => p.Category)
                .HasForeignKey(p => p.FK_CategoryId)
                .WillCascadeOnDelete(false);
        }
    }
}
