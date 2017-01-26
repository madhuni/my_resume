/* Making the Bio-obeject for the Resume */

var bio = {
    "name": "Kanishka Mohan Madhuni",
    "role": {
        "roleDesc": "Front-End Web Developer",
        "roleLogo": "fa-briefcase"
    },
    "profilePicUrl": "./img/my-profile-pic-2.jpg",
    "contactInfo": {
        "contactType": {
            "location": "Bangalore, India",
            "email": "kmmadhuni@gmail.com",
            "mobile": "+91-8954054974",
            "gitHub": "https://github.com/madhuni/",
            "portfolio": "https://madhuni.github.io/"
        },
        "contactInfoLogo": ["fa-map-marker", "fa-envelope", "fa-phone", "fa-github-square", "fa-paperclip"]
    },
    "skills": {
        "skillLogoUrl": ["./img/web-tech-logo/html5.svg",
            "./img/web-tech-logo/css3.svg",
            "./img/web-tech-logo/js.svg",
            "./img/web-tech-logo/jquery.svg",
            "./img/web-tech-logo/bootstrap.svg"
        ],
        "skillDesc": ["HTML-5", "CSS-3", "Javascript", "JQuery", "Bootstrap"]
    },
    "language": {
        "langDesc": ["English", "Hindi"],
        "langPercent": ["85", "90"]
    }
};

/* Work-experience object goes here */

var work = {
    "jobs": [{
        "employer": "Cognizant Technology Solutions",
        "title": "Application Analyst",
        "locaiton": "Chennai/Bangalore",
        "dates": "April 2015 - Present",
        "description": "I have worked as a Application Analyst in the EDI. EDI which stands for Electronic Data Interchange is a third party team which the client use to exchange the different kind of files in different formates to their business partners. I had to moinitor the applicaton so that the flow of flies will remain fine and do the automation for cutting down the time in day to day operations.",
        "companyLogo": "./img/cognizant_logo.png",
        "experience": "1 Year, 9 Months"
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

var featuredProjects = {
    "projects": [{
        "title": "My Portfolio Project",
        "dates": "December 2016",
        "description": "This is my portfolio Project. I have used HMTL5 for markup and CSS3 for the styling of the project. The page has been made fully responsive to work across all the devices. Bootstrap is also used to give the interactivity to the page. The CSS Flexbox layout has been used to design the entire layout of the page.",
        "images": "http://lorempixel.com/1200/720"
    }, {
        "title": "My Interactive Resume",
        "dates": "Jan 2016",
        "description": "I have made this iteractive resume to showcase my details on an online plateform. This resume has been built up using HTML5 and CSS3 flex box layout working across all the browsers. JQuery has been used to manipulate the DOM elements and for more features.",
        "images": "http://lorempixel.com/1200/720"
    }]
};

featuredProjects.display = function() {
    
    var items = featuredProjects.projects;
     
    for (var i=0; i<items.length; i++) {
        
        var formattedArticleHeading = HTMLprojectArticleHeading.replace("%data%", items[i].title);
        var formattedDuration = HTMLprojectDuration.replace("%data%", items[i].dates);
        var formattedImageSrc = HTMLimageContainer.replace("%data%", items[i].images);
        var formattedDescription = HTMLprojectDescription.replace("%data%", items[i].description);
        
        
        $("#projects:last").append(HTMLprojectArticle);
        $(".projects-article:last").append(formattedArticleHeading).append(formattedDuration).append(formattedImageSrc).append(formattedDescription);
    }

    $("<hr>").insertAfter(".projects-article"); // adding <hr> at the end of each article

    var lastChild = $("hr:last-child"); // selecting the <hr> tag which is the last-element of its parent i.e. "#projects"
    $(lastChild).remove(); // then removing that last <hr> tag from the HTML.
};

/* Obeject for the Education Goes Here */

var education = {
    "onlineEducation": [{
        "plateform": "Udacity",
        "duration": "December 2016 - Present",
        "certificationTitle": "Front End Development Nanodegree"
    }],
    "academics": [{
        "collegeName": "Moradabad Institute of Technology",
        "degree": "B.Tech.",
        "duration": "2010-2014",
        "location": "Moradabad, Uttar Pradesh",
        "major": "Mechanical Engineering"
    }, {
        "collegeName": "Chitragupt Inter College",
        "degree": "Intermediate",
        "duration": "2007-2009",
        "location": "Moradabad, Uttar Pradesh",
        "major": "Physics, Chemistry, Maths"
    }, {
        "collegeName": "Chitragupt Inter College",
        "degree": "Highschool",
        "duration": "2006-2007",
        "location": "Moradabad, Uttar Pradesh",
        "major": "Physics, Chemistry, Maths"
    }]
};

/* Code for desplaying BIO starts here */

function displayTitle() {
    
    var formattedTitle = HTMLresumeTitle.replace("%data%", bio.name);
    var formattedPic = HTMLresumePic.replace("%data%", bio.profilePicUrl);
	$("#card-1").prepend(formattedTitle);
    $("#card-1").prepend(formattedPic);
};

function displayContact() {

    var contacts = [];
    
    $.each(bio.contactInfo.contactType, function(key, value){
        contacts.push(value);
    });    
    // console.log(contacts);
    for (var i=0; i<contacts.length; i++) {

        var formattedFaClass = bio.contactInfo.contactInfoLogo[i];
        var formattedContactType = contacts[i];
        
        var formattedContect = HTMLcontactContent.replace("%font-awesome-class%",formattedFaClass).replace("%data%", formattedContactType);
        $("#contact-section:last").append(HTMLcontactContainer);
        $(".details:last").append(formattedContect);
    }
};

function displaySkills() {

    for (var i=0; i<bio.skills.skillDesc.length; i++) {
        var logoUrl = bio.skills.skillLogoUrl[i];
        var skillDesc = bio.skills.skillDesc[i];
        
        var formattedSkillContent = HTMLskillContent.replace("%logo-image%", logoUrl).replace("%data%", skillDesc);
        
        $("#skills:last").append(HTMLskillsContainer);
        $(".details:last").append(formattedSkillContent);
    }
};

function displayLanguage() {
    
	for (var i=0; i<bio.language.langDesc.length; i++) {
        var lang = bio.language.langDesc[i];
        var percent = bio.language.langPercent[i];
        
        var formattedLang = HTMLlangContent.replace("%data%",lang).replace("%cur-value%", percent);
        
        $("#lang-section:last").append(HTMLlangContainer);
        $(".details:last").append(formattedLang);
    }
};

function dispalyEducation() {
    // displaying the Online education first
    var eduType1 = education.onlineEducation;
    var eduType2 = education.academics;
    
    $.each(eduType1, function(index, value) {
        var formattedArticleHeading = HTMLarticleHeading1.replace("%data%",eduType1[index].plateform);
        /*console.log(formattedArticleHeading);*/
        var formattedEduDuration = HTMLeduDuration1.replace("%data%", eduType1[index].duration);
        var formattedMajor = HTMLmajor1.replace("%data%", eduType1[index].certificationTitle);
        
        $("#online-education:last").append(HTMLonlineEduArticle);
        $(".online-edu-article:last").append(formattedArticleHeading);
        $(".online-edu-article:last").append(formattedEduDuration);
        $(".online-edu-article:last").append(formattedMajor);
        
    });
    
    $.each(eduType2, function(index, value) {
        var formattedArticleHeading = HTMLarticleHeading2.replace("%data%",eduType2[index].collegeName).replace("%data%",eduType2[index].degree);
        var formattedEduDuration = HTMLeduDuration2.replace("%data%", eduType2[index].duration);
        var formattedLocation = HTMLeduLocation.replace("%data%", eduType2[index].location);
        var formattedMajor = HTMLmajor2.replace("%data%", eduType2[index].major);
        
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
    displayTitle();
    displayContact();
    displaySkills();
    displayLanguage();
    work.display();
    featuredProjects.display();
    dispalyEducation();
});

