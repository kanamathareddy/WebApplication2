using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace vta.website.Models
{
    public class AcademicsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Department()
        {
            return View();
        }
        public IActionResult AcademicRegulations()
        {
            return View();
        }
        public IActionResult Library()
        {
            return View();
        }
        public IActionResult Examination()
        {
            return View();
        }
        public IActionResult AcademicCalendar()
        {
            return View();
        }

        public IActionResult Accreditation()
        {
            return View();
        }

        public IActionResult Mous()
        {
            return View();
        }

        public IActionResult Faculty()
        {
            return View();
        }
    }
}