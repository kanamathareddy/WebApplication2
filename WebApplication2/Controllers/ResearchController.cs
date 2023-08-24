using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace vta.website.Controllers
{
    public class ResearchController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult StudentResearch()
        {
            return View();
        }
        public IActionResult FacultyResearch()
        {
            return View();
        }
        public IActionResult FundedProjects()
        {
            return View();
        }
        public IActionResult Publications()
        {
            return View();
        }
        public IActionResult Laboratories()
        {
            return View();
        }
    }
}