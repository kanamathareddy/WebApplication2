$("#about").addClass("activeAbout");
$('#site-banner').addClass("hidden");
$('#navigation-bar').addClass("navbar-fixed-top");
$('#side-nav-button-mobile').removeClass("visible-xs");

window.setInterval(function () {
    var images = ["vits.jpg"];
    $('#parallax-bg').css({ 'background': 'url(../images/About/' + images[Math.floor(Math.random() * images.length)] + ') no-repeat center center fixed' });
}, 900000);


window.onscroll = function () { scrollFunction() };
var siteBannerHeight = $("#site-banner").height();
//function scrollFunction() {
//    if (document.body.scrollTop > (siteBannerHeight) || document.documentElement.scrollTop > (siteBannerHeight)) {
//        //$('#site-banner').addClass("hidden");
//        //$('#navigation-bar').addClass("navbar-fixed-top");
//    } else {
//        //$('#site-banner').removeClass("hidden");
//        //$('#navigation-bar').removeClass("navbar-fixed-top");
//    }
//}

function scrollFunction() {
    if (innerHeight < document.documentElement.scrollTop - 55) {
        $("#navigation-bar").addClass("navigationBarAfterScroll");
        $("#about").addClass("active");
        $("#about").removeClass("activeAbout");
        $("#navigation-bar .nav a, #navigation-bar .nav a:hover, #navigation-bar .nav a:active, #navigation-bar .nav a:visited").css('background-color', 'inherit');
        $("#navigation-bar .nav a, #navigation-bar .nav a:hover, #navigation-bar .nav a:active, #navigation-bar .nav a:visited").css('opacity', '1');
    } else {
        $("#navigation-bar").removeClass("navigationBarAfterScroll");
        $("#about").removeClass("active");
        $("#about").addClass("activeAbout");
        $("#navigation-bar .nav a, #navigation-bar .nav a:hover, #navigation-bar .nav a:active, #navigation-bar .nav a:visited").css('background-color', 'darkolivegreen');
        $("#navigation-bar .nav a, #navigation-bar .nav a:hover, #navigation-bar .nav a:active, #navigation-bar .nav a:visited").css('opacity', '0.7');
    }
}



$(document).ready(function () {
    var showChar = 200;
    var ellipsestext = "...";
    var moretext = "more";
    var lesstext = "less";
    $('.thumbnail-description').each(function () {
        var content = $(this).html();

        if (content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar - 1, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function () {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();

        $('.box').matchHeight();

        return false;

    });
});
