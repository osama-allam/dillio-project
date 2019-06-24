using Microsoft.AspNetCore.Http;
using System;

namespace Dillio_Backend.API.ViewModel
{
    public class ImageCreationViewModel
    {
        public string Url { get; set; }
        public IFormFile File { get; set; }
        public DateTime DateAdded { get; set; }
        public string PublicId { get; set; }
        public ImageCreationViewModel()
        {
            DateAdded = DateTime.Now;
        }
    }
}