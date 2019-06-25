using System;

namespace Dillio_Backend.API.ViewModel
{
    public class ImageToReturnViewModel
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public DateTime DateAdded { get; set; }
        public string PublicId { get; set; }
    }
}