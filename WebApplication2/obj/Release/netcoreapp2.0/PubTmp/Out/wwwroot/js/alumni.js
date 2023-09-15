//  Academics tab is highlighted in the navigation bar
$("#admissions").addClass("active");

//  Display random images of academics in section banner
var images = ["Adm1.jpg", "Adm2.jpg"];
$('#section-banner').css({ 'background-image': 'url(../images/Admission/' + images[Math.floor(Math.random() * images.length)] + ')' });

//  Mobile view button text
var currentURL = window.location.href;
if (currentURL.includes("Admissions")) {
    $('#side-nav-button-mobile--title').text('Admissions');
}
if (currentURL.includes("AdmissionCriteria")) {
    $('#side-nav-button-mobile--title').text('Admission Criteria');
}
if (currentURL.includes("AdmissionProcedure")) {
    $('#side-nav-button-mobile--title').text('AdmissionProcedure');
}
if (currentURL.includes("AdmissionContact")) {
    $('#side-nav-button-mobile--title').text('AdmissionContact');
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