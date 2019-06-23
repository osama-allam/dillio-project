using System;
using System.Text;
using Dillio_Backend.BLL.Core.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Dillio_Backend.DAL.Persistence.EntityConfigurations

{
    public class BlogConfiguration : IEntityTypeConfiguration<Blog>
    {
        public void Configure(EntityTypeBuilder<Blog> builder)
        {
            builder.ToTable("Blog");

            builder.HasKey(b => b.Id);

            builder.HasMany(b => b.Comments)
                .WithOne(c => c.Blog)
                .HasForeignKey(d => d.BlogId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Property(b => b.Title)
                .HasColumnType("nvarchar(50)")               
                .IsRequired();

            builder.Property(b => b.Description)
                .HasColumnType("nvarchar(200)");
               


            builder.HasMany(b => b.Likes)
                .WithOne(l => l.Blog)
                .HasForeignKey(m => m.BlogId) 
                .OnDelete(DeleteBehavior.Cascade);

        }

        
    }

    
 }

