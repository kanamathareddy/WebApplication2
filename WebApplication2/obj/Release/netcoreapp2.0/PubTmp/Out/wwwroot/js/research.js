//  Academics tab is highlighted in the navigation bar
$("#Research").addClass("active");

//  Display random images of academics in section banner
var images = ["Research.jpg", "Research2.jpg", "Research3.jpg", "Research4.jpg", "Research5.jpg", "Research6.jpg",];
$('#section-banner').css({ 'background-image': 'url(../images/Research/' + images[Math.floor(Math.random() * images.length)] + ')' });


//  Mobile view button text
var currentURL = window.location.href;
if (currentURL.includes("Research")) {
    $('#side-nav-button-mobile--title').text('Research');
}
if (currentURL.includes("StudentResearch")) {
    $('#side-nav-button-mobile--title').text('Student Research');
}
if (currentURL.includes("FacultyResearch")) {
    $('#side-nav-button-mobile--title').text('Faculty Research');
}
if (currentURL.includes("FundedProjects")) {
    $('#side-nav-button-mobile--title').text('FundedProjects');
}
if (currentURL.includes("Publications")) {
    $('#side-nav-button-mobile--title').text('Publications');
}
if (currentURL.includes("Laboratories")) {
    $('#side-nav-button-mobile--title').text('Laboratories');
}


//  Handeling the right side menu view
if ($('#right-side-nav-menu .card').length > 0) {
    var myAccordion = new gianniAccordion({
        elements: "#right-side-nav-menu .card article",
        trigger: "[data-accordion-element-trigger]",
        content: "[data-accordion-element-content]",
    });

    //myAccordion.on("elementSelected", (data) => {
    //    console.log("elementOpened", data);
    //});
}