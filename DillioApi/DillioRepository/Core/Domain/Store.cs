using System;
using System.Collections.Generic;
using System.Text;
using DAL_Dillio_Project.Core.Domain;

namespace DillioBackendRepository.Core.Domain
{
    [Serializable]
    public class Store
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Image Image { get; set; }
        public int FK_ImageId { get; set; }
    }
}
