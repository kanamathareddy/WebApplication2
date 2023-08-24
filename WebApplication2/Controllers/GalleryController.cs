using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace vta.website.Controllers
{
    public class GalleryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Sports()
        {
            return View();
        }
        public IActionResult Campus()
        {
            return View();
        }
        public IActionResult Placements()
        {
            return View();
        }
        public IActionResult Faculty()
        {
            return View();
        }
    }
}