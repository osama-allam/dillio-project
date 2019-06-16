using System;
using System.Collections.Generic;
using System.Text;

namespace DillioBackendRepository.Core.Domain
{
    [Serializable]
    public class Store
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
