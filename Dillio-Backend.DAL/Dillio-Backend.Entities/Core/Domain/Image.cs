﻿using System;

namespace Dillio_Backend.BLL.Core.Domain
{
    [Serializable]
    public class Image
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int StoreId{ get; set; }
        public Store Store { get; set; }
        public int BlogId { get; set; }
        public Blog Blog { get; set; }
    }
}