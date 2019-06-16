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

        }
    }
}
