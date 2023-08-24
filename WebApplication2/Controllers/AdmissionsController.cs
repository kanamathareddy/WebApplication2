using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace vta.website.Controllers
{
    public class AdmissionsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult AdmissionCriteria()
        {
            return View();
            
        }
        public IActionResult AdmissionProcedure()
        {
            return View();
        }

    }
}