using System;
using DillioBackendRepository.Core.Domain;

namespace DAL_Dillio_Project.Core.Domain
{
    [Serializable]
    public class Image
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public Store Store { get; set; }
    }
}