using DAL_Dillio_Project.Core.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace DAL_Dillio_Project.Persistence.EntityConfigurations
{
    public class ProductConfiguration:EntityTypeConfiguration<Product>
    {
        public ProductConfiguration()
        {

        }
    }
}
