using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace vta.website.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Founder()
        {
            return View();
        }
        
        public IActionResult Management()
        {
            return View();
        }

        public IActionResult News()
        {
            return View();
        }

        public IActionResult Gallery()
        {
            return View();
        }
    }
}