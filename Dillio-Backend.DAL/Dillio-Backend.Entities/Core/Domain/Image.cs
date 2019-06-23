using System;

namespace Dillio_Backend.BLL.Core.Domain
{
    [Serializable]
    public class Image
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }

    }
}