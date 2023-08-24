using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace vta.website.Controllers
{
    public class FacilitiesController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Hostels()
        {
            return View();
        }

        public IActionResult Canteen()
        {
            return View();
        }

        public IActionResult Labs()
        {
            return View();
        }

        public IActionResult Transport()
        {
            return View();
        }

        public IActionResult GuestHouse()
        {
            return View();
        }




    }
}