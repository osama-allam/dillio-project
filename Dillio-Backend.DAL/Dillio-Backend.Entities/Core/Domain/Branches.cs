using System;

namespace Dillio_Backend.BLL.Core.Domain
{
    [Serializable]
    public class Branches
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public Store Store { get; set; }
        public int StoreId { get; set; }

    }
}
