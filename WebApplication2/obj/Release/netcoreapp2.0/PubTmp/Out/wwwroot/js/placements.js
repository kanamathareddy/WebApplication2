//  Academics tab is highlighted in the navigation bar
$("#placements").addClass("active");

//  Display random images of academics in section banner
var images = ["placements.jpg"];
$('#section-banner').css({ 'background-image': 'url(../images/Placements/' + images[Math.floor(Math.random() * images.length)] + ')' });

//  Mobile view button text
var currentURL = window.location.href;
if (currentURL.includes("Placements")) {
    $('#side-nav-button-mobile--title').text('Placements');
}
if (currentURL.includes("PlacementsStats")) {
    $('#side-nav-button-mobile--title').text('Placements Stats');
}
if (currentURL.includes("Recruiters")) {
    $('#side-nav-button-mobile--title').text('Recruiters');
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