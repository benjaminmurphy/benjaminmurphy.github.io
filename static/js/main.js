var projectHeader = document.getElementById("projects");
var contactHeader = document.getElementById("contact");
var linksHeader = document.getElementById("links");

function scrollToProject() {
    $("body, html").animate({
        scrollTop: projectHeader.offsetTop
    }, 300, function() {
        window.URL = "benjaminmurphy.me#projects";
    });
}

function scrollToContact() {
    $("body, html").animate({
        scrollTop: contactHeader.offsetTop
    }, 300, function() {
        window.URL = "benjaminmurphy.me#contact";
    });
}

function scrollToLinks() {
    $("body, html").animate({
        scrollTop: contactHeader.offsetTop
    }, 300, function() {
        window.URL = "benjaminmurphy.me#contact";
    });
}