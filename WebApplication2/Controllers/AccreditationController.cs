using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace vta.website.Controllers
{
    public class AccreditationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Cells()
        {
            return View();
        }
        public IActionResult NAAC()
        {
            return View();
        }
        public IActionResult NBA()
        {
            return View();
        }
        public IActionResult NIRF()
        {
            return View();
        }
    }
}