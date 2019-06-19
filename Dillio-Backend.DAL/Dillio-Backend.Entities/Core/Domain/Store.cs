using System;

namespace Dillio_Backend.BLL.Core.Domain
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
