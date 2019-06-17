﻿using DillioBackendRepository.Core.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace DillioBackendRepository.Persistence.EntityConfigurations
{
    public class StoreConfiguration:EntityTypeConfiguration<Store>
    {
        public StoreConfiguration()
        {
            ToTable("Store");

            HasKey(s =>s.Id);


            Property(s => s.Name)
                .HasColumnType("nvarchar")
                .HasMaxLength(50)
                .IsRequired();

            
            
        }
    }
}
