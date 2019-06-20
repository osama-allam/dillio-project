using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Dillio_Backend.BLL.Core.Domain;

namespace Dillio_Backend.DAL
{
   public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext()
        {
            
        }
        public ApplicationDbContext(DbContextOptions options) : base(options) { }

        // Add the DbSets for the application
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }

        //Configuring the database
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server =.; Database = DillioDB; Trusted_Connection = True; MultipleActiveResultSets = true;");
        }
    }
}
