$(document).ready(function() {
	if ($(window).width() < 768) {
        var new_src = $("img[src$='obg1.jpg']").attr("src").replace('obg1.jpg', 'obg2.jpg'); 
        $("img[src$='obg1.jpg']").attr("src", new_src); 
    };
});
//changes the background image appropriately when the page is loaded depending on the size of screen.

$(document).ready(function() {
    $('#CREATEACCOUNTFORM').toggle();
	$('.trigger-link').click(function(){
	   $('#CREATEACCOUNTFORM').slideToggle(500);
	   $('#LOGINFORM').slideToggle(500);
	});
});
//toggles between create account and login forms on the account page.

function animateDropdownNav(x) {
    x.classList.toggle("nav-icon-changed");
}
//trigger for the menu X animation to play.

function arrowIconToWhite() {
	document.getElementById("dropdown-arrow").src="IMAGES/dropdown-arrow-white.png";
}
function arrowIconToBlack() {
	document.getElementById("dropdown-arrow").src="IMAGES/dropdown-arrow.png";
};
//toggles between white and black arrows when mouse is over search filters button.
function downloadIconToWhite() {
  document.getElementById("download-icon").src="IMAGES/download-arrow-white.png";
}
function downloadIconToBlue() {
  document.getElementById("download-icon").src="IMAGES/download-arrow-blue.png";
};