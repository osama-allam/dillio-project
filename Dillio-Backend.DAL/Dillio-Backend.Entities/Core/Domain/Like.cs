using System;

namespace Dillio_Backend.BLL.Core.Domain
{
    [Serializable]
    public class Like
    {
        public int Id { get; set; }
        public int BlogId { get; set; }
        public Blog Blog { get; set; }

        //whoever made the like should be here
    }
}
