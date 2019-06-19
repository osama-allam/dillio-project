using DillioBackendRepository.Core.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace DillioBackendRepository.Persistence.EntityConfigurations
{
    public class LikeConfiguration:EntityTypeConfiguration<Like>
    {
        public LikeConfiguration()
        {
            ToTable("Like");

            HasKey(l => l.Id);

            
        }
    }
}
