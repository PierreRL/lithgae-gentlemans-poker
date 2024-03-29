$(document).ready(function() {
	if ($(window).width() < 768) {
        var new_src1 = $("img[src$='slide1.png']").attr("src").replace('slide1.png', 'slide1-2.png'); 
        var new_src2 = $("img[src$='slide2.png']").attr("src").replace('slide2.png', 'slide2-2.png'); 
        var new_src3 = $("img[src$='slide3.png']").attr("src").replace('slide3.png', 'slide3-2.png'); 
        $("img[src$='slide1.png']").attr("src", new_src1); 
        $("img[src$='slide2.png']").attr("src", new_src2);
        $("img[src$='slide3.png']").attr("src", new_src3);
    };
    $("img[class$='img-slide']").height(window.innerHeight);
    var href = document.location.href;
    var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
    switch(lastPathSegment) {
        case 'upcoming':
            $("#second-alink").toggleClass("active")
            break;
        case 'results':
            $('#third-alink').toggleClass("active")
            break;
        case 'structure':
            $('#fourth-alink').toggleClass("active")
            break;
        case 'rules':
            $('#fifth-alink').toggleClass("active")
            break;
        default:
            $('#first-alink').toggleClass("active")
            break;
    }
});
//changes the background image appropriately when the page is loaded depending on the size of screen.


function animateDropdownNav(x) {
    x.classList.toggle("nav-icon-changed");
}
//trigger for the menu X animation to play.
