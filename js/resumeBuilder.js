/* Making the Bio-obeject for the Resume */
var bio = {
    name: "Kanishka Mohan Madhuni",
    role: "Front-End Web Developer",
    contacts: {
        location: "Bangalore, India",
        email: "kmmadhuni@gmail.com",
        // mobile: "+91-XXXXXXXXXX",
        github: "<a href='https://github.com/madhuni' target='_blank'>https://github.com/madhuni</a>",
        linkedin: "<a href='https://www.linkedin.com/in/kanishka-madhuni-8a2058aa/' target='_blank'>Linkedin-profile</a>"
    },
    downloads: {
        resume: "<a href='https://drive.google.com/open?id=0B3__gQQM_5VRREFRazlvR3RaODg' target='_blank'>Download Resume</a>"
    },
    welcomeMessage: "Front End Web Developer skilled in HTML5, CSS3, Javascript, jQuery, Angular JS, Knockout JS and other front end web technologies. Experienced Application Analyst with a demonstrated history of working in the information technology and services industry.",
    skills: ["HTML-5", "CSS-3", "Javascript", "JQuery", "Bootstrap", "Angular JS", "Knockout JS"],
    biopic: "./img/resume_pic.png",
    extraDetails : {
        contactInfoLogo: ["fa-map-marker", "fa-envelope", /*"fa-phone",*/ "fa-github-square"/*, "fa-paperclip"*/, "fa-linkedin"],
        downloadsLogo: ["fa-download"],
        skillLogoUrl: ["./img/web-tech-logo/html5.svg",
            "./img/web-tech-logo/css3.svg",
            "./img/web-tech-logo/js.svg",
            "./img/web-tech-logo/jquery.svg",
            "./img/web-tech-logo/bootstrap.svg",
            "./img/web-tech-logo/angular.svg",
            "./img/web-tech-logo/knockout.svg"
        ],
        language: {
            "langDesc": ["English", "Hindi"],
            "langPercent": ["80", "95"]
        }
    }
};

bio.display = function () {
    displayTitle();
    displayContact();
    displayDownloads();
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
}

function displayContact() {
    var keys = []; 
    var contacts = [];
    $.each(bio.contacts, function(key, value){
        contacts.push(value);
        keys.push(key[0].toUpperCase() + key.slice(1));
    });
        
    /* Adding the contact list in the footer */
    $("footer:last").append(HTMLfooterContacts);

    for (var i=0; i<contacts.length; i++) {
        var formattedFaClass = bio.extraDetails.contactInfoLogo[i];
        var formattedContactType = contacts[i];
        var formattedContect = HTMLcontactContent.replace("%font-awesome-class%",formattedFaClass).replace("%data%", formattedContactType);

        var formattedFooterContactsItem = HTMLfooterContactsItem.replace("%data1%", keys[i]).replace("%data2%", contacts[i]);

        $("#contact-section:last").append(HTMLcontactContainer);
        $("#contact-section .details:last").append(formattedContect);
        $('.footer-contacts:last').append(formattedFooterContactsItem);
    }
}

function displayDownloads() {
    var keys = []; 
    var downloads = [];
    $.each(bio.downloads, function(key, value){
        downloads.push(value);
        keys.push(key[0].toUpperCase() + key.slice(1));
    }); 

    for (var i=0; i<downloads.length; i++) {
        var formattedFaClass = bio.extraDetails.downloadsLogo[i];
        var formattedDownloadType = downloads[i];
        var formattedDownload = HTMLcontactContent.replace("%font-awesome-class%",formattedFaClass).replace("%data%", formattedDownloadType);

        $("#download-section:last").append(HTMLcontactContainer);
        $("#download-section .details:last").append(formattedDownload);
    }
}

function displaySkills() {
    for (var i=0; i<bio.skills.length; i++) {
        var logoUrl = bio.extraDetails.skillLogoUrl[i];
        var skillDesc = bio.skills[i];
        var formattedSkillContent = HTMLskillContent.replace("%logo-image%", logoUrl).replace("%data%", skillDesc);
        $("#skills:last").append(HTMLskillsContainer);
        $("#skills .details:last").append(formattedSkillContent);
    }
}

function displayLanguage() {
    for (var i=0; i<bio.extraDetails.language.langDesc.length; i++) {
        var lang = bio.extraDetails.language.langDesc[i];
        var percent = bio.extraDetails.language.langPercent[i];
        var formattedLang = HTMLlangContent.replace("%data%",lang).replace("%cur-value%", percent);
        $("#lang-section:last").append(HTMLlangContainer);
        $("#lang-section .details:last").append(formattedLang);
    }
}

function displayAboutMe() {
    var formattedAboutMe = HTMLaboutMe.replace('%data%', bio.welcomeMessage);
    $("#about-me-section:last").append(formattedAboutMe);
}

/* Work-experience object goes here */

var work = {
    jobs: [{
        employer: "Cognizant Technology Solutions",
        title: "Application Analyst",
        location: "Bangalore",
        dates: "April 2015 - Present",
        description: "● Automated application processes by creating Unix Shell scripting to reduce manual efforts on daily activities. <br> ● Provided end to end solutions and RCA to the clients on different incidents raised related to financial module of EDI. <br> ● Ensured effective data interchange within and outside the company by providing resolutions for production glitches. <br> ● Delivered effective training sessions and mentored the colleagues within the team.",
        companyLogo: "./img/cognizant_logo.png",
        experience: "1 Year, 9 Months"
    }]
};

work.display = function() {
    var jobItems = work.jobs;
    // console.log(jobItems);    
    for (var i=0; i<jobItems.length; i++) {
        var formattedDescription = HTMLjobDescription.replace("%data%", jobItems[i].description);
        var formattedCompanyLogo = HTMLcompanyLogo.replace("%data%", jobItems[i].companyLogo);
        var formattedCompany = HTMLcompany.replace("%data%",jobItems[i].employer);
        var formattedRole = HTMLrole.replace("%data%", jobItems[i].title);
        var formattedJobDates = HTMLjobDuration.replace("%data%", jobItems[i].dates);
        var formattedJobLocation = HTMLjobLocation.replace("%data%", jobItems[i].location);
        
        $("#work-experience:last").append(HTMLworkArticle);
        $(".work-article:last").append(formattedDescription);
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
    title: "Neighborhood Map",
    dates: "Jun 2017 – Jul 2017",
    description: "A single-page web application, built using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the FourSquare and Wikipedia APIs.",
    images: ["./img/project_images/project-neighborhood-map.jpg"],
    url: "https://github.com/madhuni/neighborhood-map"
}, {
    title: "Website Optimization",
    dates: "Jul 2017 – Jul 2017",
    description: "Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.",
    images: ["./img/project_images/project-web-optimization.jpg"],
    url: "https://github.com/madhuni/frontend-nanodegree-mobile-portfolio"
}, {
    title: "Feed Reader Testing",
    dates: "Jun 2017 – Jun 2017",
    description: "Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API.",
    images: ["./img/project_images/project-feed-render-testing.jpg"],
    url: "https://github.com/madhuni/feed-render-testing"
}, {
    title: "To-Do-List App",
    dates: "Jun 2017 – Jun 2017",
    description: "An AngularJS powered To-do-list app, enabled to keep track of the work need to be done in day to day office or work life.",
    images: ["./img/project_images/project-to-do-list.png"],
    url: "https://github.com/madhuni/to-do-list-app"
}, {
    title: "Classic Arcade Game Clone",
    dates: "Apr 2017 – Apr 2017",
    description: "An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.",
    images: ["./img/project_images/project-arcade-game.jpg"],
    url: "https://github.com/madhuni/arcade-game"
}];


projects.display = function() {
    
    var items = projects;
     
    for (var i=0; i<items.length; i++) {
        
        var formattedArticleHeading = HTMLprojectArticleHeading.replace("%data%", items[i].title).replace("%link%", items[i].url);
        var formattedDuration = HTMLprojectDuration.replace("%data%", items[i].dates);

        /* As per the design my project section will have only one image for each project. 
        * So just adding the firt image of the images array for each project.
        */
        var formattedImageSrc = HTMLimageContainer.replace("%data%", items[i].images[0]);
        var formattedDescription = HTMLprojectDescription.replace("%data%", items[i].description);
        
        
        $("#project-wrapper:last").append(HTMLprojectArticle);
        $(".projects-article:last").append(formattedImageSrc).append(formattedArticleHeading).append(formattedDuration).append(formattedDescription);
    }
};

/* Object for the Education Goes Here */

var education = {
    schools: [{
        name: "Moradabad Institute of Technology",
        location: "Moradabad, Uttar Pradesh",
        degree: "B.Tech.",
        majors: ["Mechanical Engineering"],
        dates: "2010-2014"
    }/*, {
        name: "Chitragupt Inter College",
        location: "Moradabad, Uttar Pradesh",
        degree: "Intermediate",
        majors: ["Physics", "Chemistry", "Maths"],
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
        dates: "December 2016 - July 2017",
        url : "https://udacity.com"
    },
    {
        title: "JavaScript: Understanding the Weird Parts",
        school: "Udemy",
        dates: "April 2017",
        url : "https://udacity.com"
    }]
};

education.display = function () {
    // displaying the Online education first
    var eduType1 = education.onlineCourses;
    var eduType2 = education.schools;
    
    $.each(eduType1, function(index, value) {
        var formattedArticleHeading = HTMLarticleHeading1.replace("%data%",eduType1[index].school);
        var formattedEduDuration = HTMLeduDuration1.replace("%data%", eduType1[index].dates);
        var formattedMajor = HTMLmajor1.replace("%data%", eduType1[index].title);
        
        $("#online-education:last").append(HTMLonlineEduArticle);
        $(".online-edu-article:last").append(formattedArticleHeading);
        $(".online-edu-article:last").append(formattedMajor);
        $(".online-edu-article:last").append(formattedEduDuration);
        
    });
    
    $.each(eduType2, function(index, value) {
        var formattedArticleHeading = HTMLarticleHeading2.replace("%data%",eduType2[index].name).replace("%data%",eduType2[index].degree);
        var formattedEduDuration = HTMLeduDuration2.replace("%data%", eduType2[index].dates);
        var formattedLocation = HTMLeduLocation.replace("%data%", eduType2[index].location);

        var majorsString = "";
        for (var i=0; i<eduType2[index].majors.length; i++) {
            majorsString += eduType2[index].majors[i] + ", ";
        }
        
        formattedMajor = HTMLmajor2.replace("%data%", majorsString.substr(majorsString[0], majorsString.length-2));
        
        $("#academic-education:last").append(HTMLacademicEduArticle);
        $(".academic-edu-article:last").append(formattedArticleHeading);
        $(".academic-edu-article:last").append(formattedMajor);
        $(".academic-edu-article:last").append(formattedEduDuration);
        $(".academic-edu-article:last").append(formattedLocation);
        
    });
    
    // $('<hr>').insertAfter(".academic-edu-article");
    // var lastChild = $("hr:last-child");
    // $(lastChild).remove();
};

//here we are using the "failsafe" jQuery to initilaize all the functions
jQuery(function($) {
    bio.display();
    work.display();
    projects.display();
    education.display();
    $("#map-section:last").append(googleMap);
});
