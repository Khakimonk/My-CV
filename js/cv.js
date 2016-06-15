$("#btnAbout").click(function() {
    $('html, body').animate({
        scrollTo: $("#aboutMe").offset().top
    }, 2000);
});

$("#btnCareer").click(function() {
    $('html, body').animate({
        scrollTo: $("#myCareer").offset().top
    }, 2000);
});

$("#btnProjects").click(function() {
    $('html, body').animate({
        scrollTo: $("#myProjects").offset().top
    }, 2000);
});

$("#btnContact").click(function() {
    $('html, body').animate({
        scrollTo: $("#contact").offset().top
    }, 2000);
});
