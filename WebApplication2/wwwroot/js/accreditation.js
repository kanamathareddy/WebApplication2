//  Academics tab is highlighted in the navigation bar
$("#accreditation").addClass("active");

//  Display random images of academics in section banner
var images = ["accreditation-banner1.jpg", "accreditation-banner2.jpg", "accreditation-banner3.jpg", "accreditation-banner4.jpg"];
$('#section-banner').css({ 'background-image': 'url(../images/Accreditation/' + images[Math.floor(Math.random() * images.length)] + ')' });

//  Mobile view button text
var currentURL = window.location.href;
if (currentURL.includes("NAAC")) {
    $('#side-nav-button-mobile--title').text('NAAC');
}
if (currentURL.includes("Cells")) {
    $('#side-nav-button-mobile--title').text('Cells');
}
if (currentURL.includes("NIRF")) {
    $('#side-nav-button-mobile--title').text('NIRF');
}