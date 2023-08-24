//  Academics tab is highlighted in the navigation bar
$("#campusLife").addClass("active");

//  Display random images of academics in section banner
var images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","8.jpg"];
$('#section-banner').css({ 'background-image': 'url(../images/CampusLife/' + images[Math.floor(Math.random() * images.length)] + ')' });

//  Mobile view button text
var currentURL = window.location.href;
if (currentURL.includes("CampusLife")) {
    $('#side-nav-button-mobile--title').text('Campus Life');
}
if (currentURL.includes("Infrastructure")) {
    $('#side-nav-button-mobile--title').text('Infrastructure');
}
if (currentURL.includes("Sports")) {
    $('#side-nav-button-mobile--title').text('Sports');
}
if (currentURL.includes("Hostels")) {
    $('#side-nav-button-mobile--title').text('Hostels');
}
if (currentURL.includes("Cafeteria")) {
    $('#side-nav-button-mobile--title').text('Cafeteria');
}
if (currentURL.includes("Gym")) {
    $('#side-nav-button-mobile--title').text('Gym');
}
if (currentURL.includes("Firstaid")) {
    $('#side-nav-button-mobile--title').text('Firstaid');
}
if (currentURL.includes("Clubs")) {
    $('#side-nav-button-mobile--title').text('Clubs');
}
if (currentURL.includes("GuestHouse")) {
    $('#side-nav-button-mobile--title').text('Guest Rooms');
}
if (currentURL.includes("Transport")) {
    $('#side-nav-button-mobile--title').text('Transport');
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