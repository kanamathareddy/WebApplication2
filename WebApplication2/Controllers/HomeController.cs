using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using vta.website.Models;

namespace vta.website.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        //[Route("/QuickLinks/info/")]
        public IActionResult RTI()
        {
            return View();
        }

        public IActionResult AffiliationsRecognitions()
        {
            return View();
        }

        public IActionResult Alumni()
        {
            return View();
        }

        public IActionResult Careers()
        {
            return View();
        }

        public IActionResult AchievementsAwards()
        {
            return View();
        }

        public IActionResult GoverningBody()
        {
            return View();
        }

        public IActionResult OnlineClasses()
        {
            return View();
        }

        public IActionResult TempView()
        {

            return View();
        }

        public IActionResult Error()
        {
            return View(new WebApplication2.Models.ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
