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


            builder.Property(b => b.PostName)
                .HasColumnType("nvarchar(50)");

            builder.Property(b => b.Name)
                .HasColumnType("nvarchar(50)");


            builder.Property(b => b.Description)
                .HasColumnType("nvarchar(200)");


            builder.Property(b => b.CommentNumber)
                .HasColumnType("int");


            builder.Property(b => b.Date)
                .HasColumnType("datetime");


            builder.Property(b => b.ImageUrl)
                .HasColumnType("nvarchar(100)");
               

        }

        
    }

    
 }

