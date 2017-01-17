var HTMLresumePic = '<figure class="flex-box"><img src=%data% alt="Profile Picture"></figure>';
var HTMLresumeTitle = '<h1 class="resume-title">%data%</h1>';

// we will keep the #bio-container in the HTML file.

/* Variables for the "bio-section" starts here */
// we will keep the "#contact-section" as well in the HTML file.
var HTMLcontactContainer = '<div class="details"></div>';
var HTMLcontactContent = '<i class="fa %font-awesome-class%"></i><span>%data%</span>';

// This needs to be added after the end of "#contact-section".
var HTMLhrRule = '<hr>';

// we will keep the "#skills" section in the HTML file.
var HTMLskillsContainer = '<div class="details flex-box"></div';
var HTMLskillContent = '<img src="%logo-image%" alt="HTML5 logo" width="25" height="25" class="tech-logo"><span>%data%</span>';

// we will keep the "#lang-section" in the HTML file.
var HTMLlangContainer = '<div class="details"></div>';
var HTMLlangContent = '<span>%data%</span><progress value="%cur-value%" max="100"></progress>';


/* Templet for the work-experience section starts here */
// we will keep the "#work-experience" section in the HTML.
// Section heading will also be there in the HTML.
var HTMLworkArticle = '<article id="work-article" class="container"><div id="job-items" class="flex-box"></div></article>';
var HTMLjobDescription = '<p class="job-description">%data%</p>';
var HTMLcompanyLogo = '<div class="company-logo"><img src="./img/cognizant_logo.png" alt="Company Logo" width="45" height="45"></div>';
var HTMLjobDescItems = '<div class="job-desc-items"></div>';
var HTMLcompanyAndRole = '<h4 class="article-heading">"%data%" / "%data%"';
var HTMLjobDuration = '<div class="job-duration"><i class="fa  fa-calendar"></i><span class="duration">%data%</span></div>';
var HTMLjobLocation = '<div class="job-location"><i class="fa fa-map-marker"></i><span class="location-description">%data%</span></div>';

/* Helper content for the portfolio section starts here */
// we will keep the "#projects" section in the HTML.
// Section heading will also be there in the HTML.
var HTMLprojectArticle = '<article id="projects-article" class="container flex-box"></article>';
var HTMLprojectDuration = '<div class="project-duration"><i class="fa fa-calendar"></i><time>%data%</time></div>';
var HTMLimageContainer = '<div class="image-container"><img src="%data%" alt="Project Image" width="218" height="150"></div>';
var HTMLprojectDescription = '<p class="project-description">%data%</p>';
