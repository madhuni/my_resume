/* Making the Bio-obeject for the Resume */

var bio = {
	"name" : "Kanishka Mohan Madhuni",

	"role" : {
		"roleDesc" : "Front-End Web Developer",
		"roleLogo" : "fa-briefcase"
	},

	"profilePicUrl" : "./img/my-profile-pic-2.jpg",

	"contactInfo" : {
		"contactType" : {
            "location" : "Bangalore, India",
            "email" : "kmmadhuni@gmail.com",
            "mobile" : "+91-8954054974",
            "gitHub" : "https://github.com/madhuni/",
            "portfolio" : "https://madhuni.github.io/"
        },
		"contactInfoLogo" : ["fa-map-marker", "fa-envelope", "fa-phone", "fa-github-square", "fa-paperclip"]
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

function displayContact() {
    
    var contactKeys = Object.keys(bio.contactInfo.contactType);
    /*console.log(contactKeys);*/
    
    for(var i=0; i<contactKeys.length; i++) {
        var formattedFaClass = Object.values(bio.contactInfo.contactInfoLogo)[i];
        var formattedContactType = Object.values(bio.contactInfo.contactType)[i];
        
        var formattedContect = HTMLcontactContent.replace("%font-awesome-class%",formattedFaClass).replace("%data%", formattedContactType);
        
        $("#contact-section:last").append(HTMLcontactContainer);
        $(".details:last").append(formattedContect);
    }
    
    $(HTMLhrRule).insertAfter("#contact-section");
};

displayContact();

