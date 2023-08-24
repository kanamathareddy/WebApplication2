//  Academics tab is highlighted in the navigation bar
$("#academics").addClass("active");

//  Display random images of academics in section banner
var images = ["civil1.jpg", "civil9.jpg", "cse1.jpg", "cse2.jpg", "cse3.jpg", "cse5.jpg", "cse8.jpg", "cse9.jpg", "ece-banner.jpg", "ece.jpg", "ece3.jpg", "ece4.jpg", "ece8.jpg", "eee1.jpg", "eee2.jpg", "eee3.jpg", "eee9.jpg", "facilities.jpg", "facilities2.jpg", "library.jpg", "library3.jpg", "library4.jpg", "library5.jpg", "library6.jpg", "mech1.jpg", "mech2.jpg", "mech3.jpg", "mech4.jpg", "mech5.jpg", "mech6.jpg", "mech7.jpg"];
$('#section-banner').css({ 'background-image': 'url(../images/Academics/' + images[Math.floor(Math.random() * images.length)] + ')' });

//  Mobile view button text
var currentURL = window.location.href;
if (currentURL.includes("Academics")) {
    $('#side-nav-button-mobile--title').text('Academics');
}
if (currentURL.includes("Department")) {
    $('#side-nav-button-mobile--title').text('Department');
}
if (currentURL.includes("Faculty")) {
    $('#side-nav-button-mobile--title').text('Faculty');
}
if (currentURL.includes("Examination")) {
    $('#side-nav-button-mobile--title').text('Examination');
}
if (currentURL.includes("AcademicRegulations")) {
    $('#side-nav-button-mobile--title').text('Academic Regulations');
}
if (currentURL.includes("AcademicCalendar")) {
    $('#side-nav-button-mobile--title').text('Academic Calender');
}


//  loading the numbers with animatin on academic stats block
$(function () {
    var count = { val: 0 };

    var finalCounter1 = parseInt($("#counter1 .counter-block__count").text());
    var finalCounter2 = parseInt($("#counter2 .counter-block__count").text());
    var finalCounter3 = parseInt($("#counter3 .counter-block__count").text());
    var finalCounter4 = parseInt($("#counter4 .counter-block__count").text());

    TweenLite.to(count, 2, { val: finalCounter1, roundProps: "val", onUpdate: function () { $("#counter1 .counter-block__count").html(count.val) }, ease: Linear.easeNone });
    TweenLite.to(count, 1, { val: finalCounter2, roundProps: "val", onUpdate: function () { $("#counter2 .counter-block__count").html(count.val) }, ease: Linear.easeNone });
    TweenLite.to(count, 2, { val: finalCounter3, roundProps: "val", onUpdate: function () { $("#counter3 .counter-block__count").html(count.val) }, ease: Linear.easeNone });
    TweenLite.to(count, 2, { val: finalCounter4, roundProps: "val", onUpdate: function () { $("#counter4 .counter-block__count").html(count.val) }, ease: Linear.easeNone });

});

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