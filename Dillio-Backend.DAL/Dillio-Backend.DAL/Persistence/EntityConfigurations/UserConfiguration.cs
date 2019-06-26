using Dillio_Backend.BLL.Core.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Dillio_Backend.DAL.Persistence.EntityConfigurations
{
    public class UserConfiguration:IEntityTypeConfiguration<ApplicationUser>
    {
        public void Configure(EntityTypeBuilder<ApplicationUser> builder)
        {

            builder.Property(u => u.FirstName)
                .HasColumnType("nvarchar(250)");

            builder.Property(u => u.LastName)
                .HasColumnType("nvarchar(250)");

            builder.HasMany(u => u.Blogs)
                .WithOne(b => b.User)
                .HasForeignKey(b => b.FK_UserId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(u => u.Reviews)
                .WithOne(b => b.User)
                .HasForeignKey(b => b.UserId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(u => u.Comments)
                .WithOne(b => b.User)
                .HasForeignKey(b => b.FK_UserId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(u => u.Likes)
                .WithOne(b => b.User)
                .HasForeignKey(b => b.FK_UserId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(u => u.Orders)
                .WithOne(b => b.User)
                .HasForeignKey(b => b.FK_UserId)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }
}