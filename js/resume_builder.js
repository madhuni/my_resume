/* Making the Bio-obeject for the Resume */

var bio = {
	"name" : "Kanishka Mohan Madhuni",

	"role" : {
		"roleDesc" : "Front-End Web Developer",
		"roleLogo" : "fa-briefcase"
	},

	"profilePicUrl" : "./img/my-profile-pic-2.jpg",

	"contactInfo" : {
		"location" : "Bangalore, India",
		"email" : "kmmadhuni@gmail.com",
		"mobile" : "+91-8954054974",
		"gitHub" : "https://github.com/madhuni/",
		"portfolio" : "https://madhuni.github.io/",
		"contactInfoLogo" : ["fa-map-marker", "fa-envelope", "fa-phone", "fa-github", "fa-paperclip"]
	},

	"skills" : {
		"skillLogoUrl" : ["./img/web-tech-logo/html5.svg", 
			"./img/web-tech-logo/css3.svg", 
			"./img/web-tech-logo/js.svg", 
			"./img/web-tech-logo/jquery.svg", 
			"./img/web-tech-logo/bootstrap.svg"],
		"skillDesc" : ["HTML-5", "CSS-3", "Javascript", "JQuery", "Bootstrap"]
	},

	"language" : {
		"langDesc" : ["English", "Hindi"],
		"langPercent" : ["85%", "90%"]
	}

};

/* Code for desplaying BIO starts here */

function displayTitle() {
    var formattedTitle = HTMLresumeTitle.replace("%data%", bio.name);
    var formattedPic = HTMLresumePic.replace("%data%", bio.profilePicUrl);
     
	$("#bio-container").prepend(formattedTitle);
    $("#bio-container").prepend(formattedPic);
};

displayTitle();