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
        // portfolio: "https://madhuni.github.io"
    },
    welcomeMessage: "Front End Web Developer skilled in HTML5, CSS3, Javascript, jQuery, Angular JS, Knockout JS and other front end web technologies. Experienced Application Analyst with a demonstrated history of working in the information technology and services industry.",
    skills: ["HTML-5", "CSS-3", "Javascript", "JQuery", "Bootstrap"],
    biopic: "./img/resume_pic.png",
    extraDetails : {
        contactInfoLogo: ["fa-map-marker", "fa-envelope", /*"fa-phone",*/ "fa-github-square"/*, "fa-paperclip"*/, "fa-linkedin"],
        skillLogoUrl: ["./img/web-tech-logo/html5.svg",
            "./img/web-tech-logo/css3.svg",
            "./img/web-tech-logo/js.svg",
            "./img/web-tech-logo/jquery.svg",
            "./img/web-tech-logo/bootstrap.svg"
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
    // console.log(contacts);
    // console.log(keys);

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
        // description: "I have worked as a Application Analyst in the EDI. EDI which stands for Electronic Data Interchange is a third party team which the client use to exchange the different kind of files in different formates to their business partners. I had to moinitor the applicaton so that the flow of flies will remain fine and do the automation for cutting down the time in day to day operations.",
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
        // $(".work-article:last").append(formattedDescription);
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
    images: ["./img/map-project.PNG"]
}, {
    title: "Website Optimization",
    dates: "Jul 2017 – Jul 2017",
    description: "Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.",
    images: ["./img/optimization-project.jpg"]
}, {
    title: "Feed Reader Testing",
    dates: "Jun 2017 – Jun 2017",
    description: "Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API.",
    images: ["http://www.zealopers.com/wp-content/uploads/2015/05/web-development-450x300.png"]
}, {
    title: "To-Do-List App",
    dates: "Jun 2017 – Jun 2017",
    description: "An AngularJS powered To-do-list app, enabled to keep track of the work need to be done in day to day office or work life.",
    images: ["./img/to-do-list-app.jpg"]
}, {
    title: "Classic Arcade Game Clone",
    dates: "Apr 2017 – Apr 2017",
    description: "An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.",
    images: ["./img/arcade-game.jpg"]
}];


projects.display = function() {
    
    var items = projects;
     
    for (var i=0; i<items.length; i++) {
        
        var formattedArticleHeading = HTMLprojectArticleHeading.replace("%data%", items[i].title);
        var formattedDuration = HTMLprojectDuration.replace("%data%", items[i].dates);

        /* As per the design my project section will have only one image for each project. 
        * So just adding the firt image of the images array for each project.
        */
        var formattedImageSrc = HTMLimageContainer.replace("%data%", items[i].images[0]);
        var formattedDescription = HTMLprojectDescription.replace("%data%", items[i].description);
        
        
        $("#project-wrapper:last").append(HTMLprojectArticle);
        $(".projects-article:last").append(formattedArticleHeading).append(formattedDuration).append(formattedImageSrc).append(formattedDescription);
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

        var majorsString = "";
        for (var i=0; i<eduType2[index].majors.length; i++) {
            majorsString += eduType2[index].majors[i] + ", ";
        }
        
        formattedMajor = HTMLmajor2.replace("%data%", majorsString.substr(majorsString[0], majorsString.length-2));
        
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

//here we are using the "failsafe" jQuery to initilaize all the functions
jQuery(function($) {
    bio.display();
    work.display();
    projects.display();
    education.display();
    $("#map-section:last").append(googleMap);
});
