using System;

namespace Dillio_Backend.BLL.Core.Domain
{
    [Serializable]
    public class Store
    {
        public int Id { get; set; }
        public string Name { get; set; }      
        public string Description { get; set; }
        public string Url { get; set; }
        public float StarRating{ get; set; }
        
    }
}
