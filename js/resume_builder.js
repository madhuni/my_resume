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

var workExperience = {
    "jobs": [{
        "companyName": "Cognizant Technology Solutions",
        "companyLogo": "./img/cognizant_logo.png",
        "jobTitle": "Application Analyst",
        "duration": "April 2015 - Present",
        "experience": "1 Year, 9 Months",
        "locaiton": "Chennai/Bangalore",
        "jobDescription": "I have worked as a Application Analyst in the EDI. EDI which stands for Electronic Data Interchange is a third party team which the client use to exchange the different kind of files in different formates to their business partners. I had to moinitor the applicaton so that the flow of flies will remain fine and do the automation for cutting down the time in day to day operations."
    }]
};

function displayWorkExperience() {
    var i;
    var jobItems = workExperience.jobs;
    // console.log(jobItems);    
    for (i=0; i<jobItems.length; i++) {
        var formattedJobDescription = HTMLjobDescription.replace("%data%", jobItems[i].jobDescription);
        var formattedCompanyLogo = HTMLcompanyLogo.replace("%data%", jobItems[i].companyLogo);
        var formattedCompanyAndRole = HTMLcompanyAndRole.replace("%data%",jobItems[i].companyName).replace("%data%", jobItems[i].jobTitle);
        var formattedJobDuration = HTMLjobDuration.replace("%data%", jobItems[i].duration);
        var formattedJobLocation = HTMLjobLocation.replace("%data%", jobItems[i].locaiton);
        
        $("#work-experience:last").append(HTMLworkArticle);
        $(".work-article:last").append(formattedJobDescription);
        $(".job-items:last").append(formattedCompanyLogo);
        $(".job-items:last").append(HTMLjobDescItems);
        $(".job-desc-items:last").append(formattedCompanyAndRole);
        $(".job-desc-items:last").append(formattedJobDuration);
        $(".job-desc-items:last").append(formattedJobLocation);
    }
};

displayWorkExperience();

/* Featured Project Obeject Goes Here */

var featuredProjects = {
    "projects": [{
        "projectTitle": "My Portfolio Project",
        "timeDuration": "December 2016",
        "projectImageSrc": "http://lorempixel.com/250/150",
        "projectDescription": "This is my portfolio Project. I have used HMTL5 for markup and CSS3 for the styling of the project. The page has been made fully responsive to work across all the devices. Bootstrap is also used to give the interactivity to the page. The CSS Flexbox layout has been used to design the entire layout of the page."
    }, {
        "projectTitle": "My Interactive Resume",
        "timeDuration": "Jan 2016",
        "projectImageSrc": "http://lorempixel.com/250/150",
        "projectDescription": "I have made this iteractive resume to showcase my details on an online plateform. This resume has been built up using HTML5 and CSS3 flex box layout working across all the browsers. JQuery has been used to manipulate the DOM elements and for more features."
    }]
};

function displayProjects() {
    var i;
    var items = featuredProjects.projects;
     console.log(items);
    for (i=0; i<items.length; i++) {
        var formattedArticleHeading = HTMLprojectArticleHeading.replace("%data%", items[i].projectTitle);
        var formattedDuration = HTMLprojectDuration.replace("%data%", items[i].timeDuration);
        var formattedImageSrc = HTMLimageContainer.replace("%data%", items[i].projectImageSrc);
        var formattedDescription = HTMLprojectDescription.replace("%data%", items[i].projectDescription);
        
        
        $("#projects:last").append(HTMLprojectArticle);
        $(".projects-article:last").append(formattedArticleHeading).append(formattedDuration).append(formattedImageSrc).append(formattedDescription);
        
    }
};

displayProjects();

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

    var contactKeys = Object.keys(bio.contactInfo.contactType);
    /*console.log(contactKeys);*/
    
    for (var i=0; i<contactKeys.length; i++) {
        var formattedFaClass = Object.values(bio.contactInfo.contactInfoLogo)[i];
        var formattedContactType = Object.values(bio.contactInfo.contactType)[i];
        
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

displayTitle();
displayContact();
displaySkills();
displayLanguage();