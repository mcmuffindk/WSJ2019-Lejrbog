function toggleNav() {
    if ($("#side-bar").css("width") === "250px") {
        $("#side-bar").css("width", "0px");
    } else {
        $("#side-bar").css("width", "250px");
    }
}

$(setTimeout(setMargin, 100));

function setMargin() {
    var margin = $('.icon-bar').css('height');
    $('.sidenav').css('margin-top', margin);
}

$(document).mouseup(function (e) {
    var el = $("#side-bar");

    if (!el.is(e.target) && el.has(e.target).length === 0) {
        el.css("width", "0px");
    }
});
