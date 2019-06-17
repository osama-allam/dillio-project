using DillioBackendRepository.Core.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace DillioBackendRepository.Persistence.EntityConfigurations
{
    public class BlogConfiguration:EntityTypeConfiguration<Blog>
    {
        public BlogConfiguration()
        {
            ToTable("Blogs");
            HasKey(b => b.Id);
            HasMany(b => b.Comments)
                .WithRequired(c => c.Blog)
                .HasForeignKey(d => d.BlogId)
                .WillCascadeOnDelete(true);

            Property(b => b.Title)
                .HasColumnType("nvarchar")
                .HasMaxLength(50)
                .IsRequired();

            Property(b => b.Description)
                .HasColumnType("nvarchar")
                .HasMaxLength(200)
                .IsOptional();

            HasMany(b => b.Likes)
                .WithRequired(l => l.Blog)
                .HasForeignKey(m => m.BlogId)
                .WillCascadeOnDelete(true);

            HasOptional(b => b.Image)
                .WithOptionalPrincipal(c => c.Blog)
                .WillCascadeOnDelete(true);
                
        }
    }
}
