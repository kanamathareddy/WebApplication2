using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace vta.website.Controllers
{
    public class ErrorController : Controller
    {

        [Route("Error/{StatusCode}")]
        public IActionResult HttpStatusCodeHandler(int statusCode)
        {
            switch (statusCode)
            {
                case 404:
                    ViewBag.ErrorMessage = "404 Error";
                    break;
                default:
                    ViewBag.ErrorMessage = "UnKnown Error";
                    break;
            }
            return View("ErrorPage");
        }
    }
}