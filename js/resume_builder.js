/* Making the Bio-obeject for the Resume */
var bio = {
    name: "Kanishka Mohan Madhuni",
    role: "Front-End Web Developer",
    contacts: {
        location: "Bangalore, India",
        email: "kmmadhuni@gmail.com",
        mobile: "+91-8954054974",
        github: "https://github.com/madhuni/",
        portfolio: "https://madhuni.github.io/"
    },
    welcomeMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    skills: ["HTML-5", "CSS-3", "Javascript", "JQuery", "Bootstrap"],
    biopic: "./img/profile-pic-1.jpg",
    extraDetails : {
        contactInfoLogo: ["fa-map-marker", "fa-envelope", "fa-phone", "fa-github-square", "fa-paperclip"],
        skillLogoUrl: ["./img/web-tech-logo/html5.svg",
            "./img/web-tech-logo/css3.svg",
            "./img/web-tech-logo/js.svg",
            "./img/web-tech-logo/jquery.svg",
            "./img/web-tech-logo/bootstrap.svg"
        ],
        language: {
            "langDesc": ["English", "Hindi"],
            "langPercent": ["85", "90"]
        }
    }
};

bio.display = function () {
    displayTitle();
    displayContact();
    displaySkills();
    displayLanguage();
    displayAboutMe();
};

/* Code for desplaying BIO starts here */

function displayTitle() {
    var formattedTitle = HTMLresumeTitle.replace("%data1%", bio.name).replace("%data2%", bio.role);
    var formattedPic = HTMLresumePic.replace("%data%", bio.biopic);
    $("#header-wrapper:last").append(formattedPic);
    $("#header-wrapper:last").append(formattedTitle);
};

function displayContact() {
    var contacts = [];
    $.each(bio.contacts, function(key, value){
        contacts.push(value);
    });    
    // console.log(contacts);
    for (var i=0; i<contacts.length; i++) {
        var formattedFaClass = bio.extraDetails.contactInfoLogo[i];
        var formattedContactType = contacts[i];
        var formattedContect = HTMLcontactContent.replace("%font-awesome-class%",formattedFaClass).replace("%data%", formattedContactType);
        $("#contact-section:last").append(HTMLcontactContainer);
        $("#contact-section .details:last").append(formattedContect);
    }
};

function displaySkills() {
    for (var i=0; i<bio.skills.length; i++) {
        var logoUrl = bio.extraDetails.skillLogoUrl[i];
        var skillDesc = bio.skills[i];
        var formattedSkillContent = HTMLskillContent.replace("%logo-image%", logoUrl).replace("%data%", skillDesc);
        $("#skills:last").append(HTMLskillsContainer);
        $("#skills .details:last").append(formattedSkillContent);
    }
};

function displayLanguage() {
    for (var i=0; i<bio.extraDetails.language.langDesc.length; i++) {
        var lang = bio.extraDetails.language.langDesc[i];
        var percent = bio.extraDetails.language.langPercent[i];
        var formattedLang = HTMLlangContent.replace("%data%",lang).replace("%cur-value%", percent);
        $("#lang-section:last").append(HTMLlangContainer);
        $("#lang-section .details:last").append(formattedLang);
    }
};

function displayAboutMe() {
    var formattedAboutMe = HTMLaboutMe.replace('%data%', bio.welcomeMessage);
    $("#about-me-section:last").append(formattedAboutMe);
};

/* Work-experience object goes here */

var work = {
    jobs: [{
        employer: "Cognizant Technology Solutions",
        title: "Application Analyst",
        locaiton: "Chennai/Bangalore",
        dates: "April 2015 - Present",
        description: "I have worked as a Application Analyst in the EDI. EDI which stands for Electronic Data Interchange is a third party team which the client use to exchange the different kind of files in different formates to their business partners. I had to moinitor the applicaton so that the flow of flies will remain fine and do the automation for cutting down the time in day to day operations.",
        companyLogo: "./img/cognizant_logo.png",
        experience: "1 Year, 9 Months"
    }]
};

work.display = function() {
    var i;
    var jobItems = work.jobs;
    // console.log(jobItems);    
    for (i=0; i<jobItems.length; i++) {
        var formattedDescription = HTMLjobDescription.replace("%data%", jobItems[i].description);
        var formattedCompanyLogo = HTMLcompanyLogo.replace("%data%", jobItems[i].companyLogo);
        var formattedCompany = HTMLcompany.replace("%data%",jobItems[i].employer);
        var formattedRole = HTMLrole.replace("%data%", jobItems[i].title);
        var formattedJobDates = HTMLjobDuration.replace("%data%", jobItems[i].dates);
        var formattedJobLocation = HTMLjobLocation.replace("%data%", jobItems[i].locaiton);
        
        $("#work-experience:last").append(HTMLworkArticle);
        $(".work-article:last").append(formattedDescription)
        $(".job-items:last").append(formattedCompanyLogo);
        $(".job-items:last").append(HTMLjobDescItems);
        $(".job-desc-items:last").append(formattedRole);
        $(".job-desc-items:last").append(formattedCompany);
        $(".job-desc-items:last").append(formattedJobDates);
        $(".job-desc-items:last").append(formattedJobLocation);
    }
    
    $("<hr>").insertAfter(".work-article");
    var lastChild = $("hr:last-child");
    $(lastChild).remove();
};

/* Featured Project Obeject Goes Here */


var projects = [{
    title: "My Portfolio Project",
    dates: "December 2016",
    description: "Built with HTML-5, CSS-3, Bootstrap Framework. Fully responsive across all devices",
    images: "http://lorempixel.com/1200/720"
}, {
    title: "My Interactive Resume",
    dates: "Jan 2016",
    description: "Built with HTML-5, CSS-3, Bootstrap Framework. Fully responsive across all devices",
    images: "http://lorempixel.com/1200/720"
}, {
    title: "My Interactive Resume",
    dates: "Jan 2016",
    description: "Built with HTML-5, CSS-3, Bootstrap Framework. Fully responsive across all devices",
    images: "http://lorempixel.com/1200/720"
}, {
    title: "My Interactive Resume",
    dates: "Jan 2016",
    description: "Built with HTML-5, CSS-3, Bootstrap Framework. Fully responsive across all devices",
    images: "http://lorempixel.com/1200/720"
}];


projects.display = function() {
    
    var items = projects;
     
    for (var i=0; i<items.length; i++) {
        
        var formattedArticleHeading = HTMLprojectArticleHeading.replace("%data%", items[i].title);
        var formattedDuration = HTMLprojectDuration.replace("%data%", items[i].dates);
        var formattedImageSrc = HTMLimageContainer.replace("%data%", items[i].images);
        var formattedDescription = HTMLprojectDescription.replace("%data%", items[i].description);
        
        
        $("#project-wrapper:last").append(HTMLprojectArticle);
        $(".projects-article:last").append(formattedArticleHeading).append(formattedDuration).append(formattedImageSrc).append(formattedDescription);
    }

    // $("<hr>").insertAfter(".projects-article"); // adding <hr> at the end of each article

    // var lastChild = $("hr:last-child"); // selecting the <hr> tag which is the last-element of its parent i.e. "#projects"
    // $(lastChild).remove(); // then removing that last <hr> tag from the HTML.
};

/* Obeject for the Education Goes Here */

var education = {
    schools: [{
        name: "Moradabad Institute of Technology",
        location: "Moradabad, Uttar Pradesh",
        degree: "B.Tech.",
        majors: "Mechanical Engineering",
        dates: "2010-2014"
    }/*, {
        name: "Chitragupt Inter College",
        location: "Moradabad, Uttar Pradesh",
        degree: "Intermediate",
        majors: "Physics, Chemistry, Maths",
        dates: "2007-2009"
    }, {
        name: "Chitragupt Inter College",
        location: "Moradabad, Uttar Pradesh",
        degree: "Highschool",
        majors: "Physics, Chemistry, Maths",
        dates: "2006-2007"
    }*/],
    onlineCourses: [{
        title: "Front End Development Nanodegree",
        school: "Udacity",
        dates: "December 2016 - Present",
        url : "https://udacity.com"
    }]
};

education.display = function () {
    // displaying the Online education first
    var eduType1 = education.onlineCourses;
    var eduType2 = education.schools;
    
    $.each(eduType1, function(index, value) {
        var formattedArticleHeading = HTMLarticleHeading1.replace("%data%",eduType1[index].school);
        /*console.log(formattedArticleHeading);*/
        var formattedEduDuration = HTMLeduDuration1.replace("%data%", eduType1[index].dates);
        var formattedMajor = HTMLmajor1.replace("%data%", eduType1[index].title);
        
        $("#online-education:last").append(HTMLonlineEduArticle);
        $(".online-edu-article:last").append(formattedArticleHeading);
        $(".online-edu-article:last").append(formattedEduDuration);
        $(".online-edu-article:last").append(formattedMajor);
        
    });
    
    $.each(eduType2, function(index, value) {
        var formattedArticleHeading = HTMLarticleHeading2.replace("%data%",eduType2[index].name).replace("%data%",eduType2[index].degree);
        var formattedEduDuration = HTMLeduDuration2.replace("%data%", eduType2[index].dates);
        var formattedLocation = HTMLeduLocation.replace("%data%", eduType2[index].location);
        var formattedMajor = HTMLmajor2.replace("%data%", eduType2[index].majors);
        
        $("#academic-education:last").append(HTMLacademicEduArticle);
        $(".academic-edu-article:last").append(formattedArticleHeading);
        $(".academic-edu-article:last").append(formattedEduDuration);
        $(".academic-edu-article:last").append(formattedLocation);
        $(".academic-edu-article:last").append(formattedMajor);
        
    });
    
    $('<hr>').insertAfter(".academic-edu-article");
    var lastChild = $("hr:last-child");
    $(lastChild).remove();
};

//here we are using the "failsafe" jQuery
jQuery(function($) {
    bio.display();
    work.display();
    projects.display();
    education.display();
});
