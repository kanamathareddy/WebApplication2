//  Events tab is highlighted in the navigation bar
$("#events").addClass("active");

//  Display random images of Events in section banner
var images = ["civil1.jpg", "civil9.jpg", "cse1.jpg", "cse2.jpg", "cse3.jpg", "cse5.jpg", "cse8.jpg", "cse9.jpg", "ece-banner.jpg", "ece.jpg", "ece3.jpg", "ece4.jpg", "ece8.jpg", "eee1.jpg", "eee2.jpg", "eee3.jpg", "eee9.jpg", "facilities.jpg", "facilities2.jpg", "library.jpg", "library3.jpg", "library4.jpg", "library5.jpg", "library6.jpg", "mech1.jpg", "mech2.jpg", "mech3.jpg", "mech4.jpg", "mech5.jpg", "mech6.jpg", "mech7.jpg"];
$('#section-banner').css({ 'background-image': 'url(../images/Academics/' + images[Math.floor(Math.random() * images.length)] + ')' });

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