using DAL_Dillio_Project.Core.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace DillioBackendRepository.Persistence.EntityConfigurations
{
    public class ImageConfiguration:EntityTypeConfiguration<Image>
    {
        public ImageConfiguration()
        {
            ToTable("Images");

            HasKey(i => i.Id);

            Property(i=>i.Url)
                .HasColumnType("nvarchar")
                .HasMaxLength(100)
                .IsRequired();

            


            HasOptional(i => i.Store)
                .WithOptionalDependent(i => i.Image)
                .WillCascadeOnDelete(true);

            HasOptional(b => b.Blog)
                .WithOptionalDependent(c => c.Image)
                .WillCascadeOnDelete(true);


        }
    }
}
