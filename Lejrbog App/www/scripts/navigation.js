function toggleNav() {
    if ($(".sidenav").css("width") > "0px") {
        $(".sidenav").css("width", "0em");
    } else {
        $(".sidenav").css("width", "15.625em");
    }
}

$(setTimeout(setMargin, 100));

function setMargin() {
    var margin = $('.icon-bar').css('height');
    $('.sidenav').css('margin-top', margin);
}

$(document).mouseup(function (e) {
    var el = $(".sidenav");

    if (!el.is(e.target) && el.has(e.target).length === 0) {
        el.css("width", "0em");
    }
});
