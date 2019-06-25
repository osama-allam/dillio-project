using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dillio_Backend.API.Controllers
{
    public class CloudImageUploadController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}