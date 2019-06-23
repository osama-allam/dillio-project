using Dillio_Backend.BLL.Core.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Dillio_Backend.DAL.Persistence.EntityConfigurations
{
    public class CommentConfiguration : IEntityTypeConfiguration<Comment>
    {
        public void Configure(EntityTypeBuilder<Comment> builder)
        {
            builder.ToTable("Comment");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.Text)
                .HasColumnType("nvarchar(50)")
                .IsRequired();

            builder.Property(c => c.UserId)
                .HasColumnName("FK_UserId");
        }
    }
}
