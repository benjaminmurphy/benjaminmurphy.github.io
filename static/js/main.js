var projectHeader = document.getElementById("projects");
var contactHeader = document.getElementById("contact");
var linksHeader = document.getElementById("links");

function scrollToProject() {
    $("body, html").animate({
        scrollTop: projectHeader.offsetTop
    }, 300, function() {
        history.pushState({}, "Benjamin Murphy", "#projects");
    });
}

function scrollToContact() {
    $("body, html").animate({
        scrollTop: contactHeader.offsetTop
    }, 300, function() {
        history.pushState({}, "Benjamin Murphy", "#contact");
    });
}

function scrollToLinks() {
    $("body, html").animate({
        scrollTop: contactHeader.offsetTop
    }, 300, function() {
        history.pushState({}, "Benjamin Murphy", "#links");
    });
}