using System;
using System.Collections.Generic;
using System.Text;

namespace DillioBackendRepository.Core.Domain
{
    [Serializable]
    public class Comment
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int BlogId { get; set; }
        public Blog Blog { get; set; }
    }
}
