using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace vta.website.Controllers
{
    public class PlacementsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult PlacementStats()
        {
            return View();
        }
        public IActionResult Recruiters()
        {
            return View();
        }
    }
}