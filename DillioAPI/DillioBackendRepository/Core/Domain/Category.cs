using System;
using System.Collections.Generic;
using System.Text;
using DAL_Dillio_Project.Core.Domain;

namespace DillioBackendRepository.Core.Domain
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Product> Products { get; set; }


    }
}
