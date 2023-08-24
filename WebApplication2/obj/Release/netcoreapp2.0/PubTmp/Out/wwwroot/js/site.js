// Write your Javascript code.
/*document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};*/

$(document).ready(function () {
    $('.box').parent().css("display", "flex");
});

$('#left-side-nav-menu li > blockquote').hide();

$('blockquote a').click(function () {
    var txt = $(this).text();
    var elementID = $(this).attr('id');

    $("#breadcrumb-nav-section > li:not(.current)").remove();
    var ul = document.getElementById("breadcrumb-nav-section");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(txt));
    ul.appendChild(li);

    if ($(window).width() < 768) {
        $('#left-side-nav-menu').collapse('toggle');
    }
});

$(document).ready(function () {

    $('#side-nav__show-button , #aside-menu__hide-button').click(function () {
        $('#left-side-nav-menu').collapse('toggle');
        $('#core-content').toggleClass('toggle-onclick_collapse');
    });

});

if ($(window).width() < 768) {
    $("#left-side-nav-menu").addClass('collapse');
    $("#left-side-nav-menu").removeClass('hidden-xs');
}




//$('.box').matchHeight();
//$(document).click(function () {
//    $('.box').matchHeight();
//});


// var leftDivHeight = $('#left-side-nav-menu').height();
// var rightDivHeight = $('#coreContent').height();
// if (rightDivHeight > leftDivHeight) {
//     $('#core-content').css('min-height', rightDivHeight + 10 + 'px');
//     $('#left-side-nav-menu').css('min-height', rightDivHeight + 10 + 'px');
// }
// else {
//     $('#core-content').css('min-height', leftDivHeight + 10 + 'px');
//     $('#left-side-nav-menu').css('min-height', leftDivHeight + 10 + 'px');
// }