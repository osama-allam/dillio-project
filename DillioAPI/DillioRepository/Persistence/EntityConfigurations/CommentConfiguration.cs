using DillioBackendRepository.Core.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace DillioBackendRepository.Persistence.EntityConfigurations
{
    public class CommentConfiguration:EntityTypeConfiguration<Comment>
    {
        public CommentConfiguration()
        {
            ToTable("Comments");

            HasKey(c => c.Id);

            Property(c => c.Text)
                .HasColumnType("nvarchar")
                .HasMaxLength(50)
                .IsRequired();


        }
    }
}
