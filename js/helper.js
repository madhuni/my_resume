var HTMLresumePic = '<div id="img-container">';
	HTMLresumePic += '<img src=%data% class="img-circle" alt="profile picture" width="100" height="100">';
	HTMLresumePic += '</div>';

var HTMLresumeTitle = '<div id="name-role-container">';
	HTMLresumeTitle += '<h1 id="name">%data1%</h1>';
	HTMLresumeTitle += '<h4 id="role">%data2%</h4>';
	HTMLresumeTitle += '</div>';
// we will keep the #bio-container in the HTML file.

/* Variables for the "bio-section" starts here */
// we will keep the "#contact-section" as well in the HTML file.
var HTMLcontactContainer = '<div class="details"></div>';
var HTMLcontactContent = '<i class="fa %font-awesome-class%"></i><span>%data%</span>';

// This needs to be added after the end of "#contact-section".
var HTMLhrRule = '<hr>';

// we will keep the "#skills" section in the HTML file.
var HTMLskillsContainer = '<div class="details flex-box"></div>';
var HTMLskillContent = '<img src="%logo-image%" alt="HTML5 logo" width="25" height="25" class="tech-logo"><span>%data%</span>';

// we will keep the "#lang-section" in the HTML file.
var HTMLlangContainer = '<div class="details"></div>';
var HTMLlangContent = '<span>%data%</span><progress value="%cur-value%" max="100"></progress>';


/* Templet for the work-experience section starts here */
// we will keep the "#work-experience" section in the HTML.
// Section heading will also be there in the HTML.
var HTMLworkArticle = '<article class="work-article container"><div class="job-items flex-box"></div></article>';
var HTMLjobDescription = '<p class="job-description hidden">%data%</p><i class="fa fa-angle-down up-down"></i><span class="more-details">Show more</span>';
var HTMLcompanyLogo = '<div class="company-logo"><img src="%data%" alt="Company Logo" width="45" height="45"></div>';
var HTMLjobDescItems = '<div class="job-desc-items"></div>';
var HTMLcompany = '<h4 class="article-heading">%data%</h4>';
var HTMLrole = '<h4 class="article-heading">%data%</h4>';
var HTMLjobDuration = '<div class="job-duration"><i class="fa  fa-calendar"></i><span class="duration">%data%</span></div>';
var HTMLjobLocation = '<div class="job-location"><i class="fa fa-map-marker"></i><span class="location-description">%data%</span></div>';

/* Helper contect for the about me section start here */
var HTMLaboutMe = '<div class="details"><p class="about-me-description"><i class="fa fa-quote-left fa-pull-left" aria-hidden="true"></i>%data%</p></div>'
/* Helper content for the portfolio section starts here */
// we will keep the "#projects" section in the HTML.
// Section heading will also be there in the HTML.
var HTMLprojectArticle = '<article class="projects-article container"></article>';
var HTMLprojectArticleHeading = '<h4 class="article-heading">%data%</h4>';
var HTMLprojectDuration = '<div class="project-duration"><i class="fa fa-calendar"></i><time>%data%</time></div>';
var HTMLimageContainer = '<div class="image-wrapper"><div class="image-container"><img src="%data%" alt="Project Image"></div></div>';
var HTMLprojectDescription = '<p class="project-description hidden">%data%</p><i class="fa fa-angle-down up-down"></i><span class="more-details">Show more</span>';

/* Helper contect for the education sections starts here */
// we will keep both the "#online-education" and "#academic-education" in the HTML.
// we will keep both the ".sub-section-heading" in the HTML as well.
var HTMLonlineEduArticle = '<article class="online-edu-article container"></article>';
var HTMLarticleHeading1 = '<h4 class="article-heading">%data%</h4>';
var HTMLeduDuration1 = '<div class="edu-duration"><i class="fa fa-calendar"></i><time>%data%</time></div>';
var HTMLmajor1 = '<p class="major"><span class="course">Course Name: </span><span class="course-desc">%data%</span></p>';

var HTMLacademicEduArticle = '<article class="academic-edu-article container"></article>';
var HTMLarticleHeading2 = '<h4 class="article-heading"><i class="fa fa-university"></i>%data% - %data%</h4>';
var HTMLeduDuration2 = '<div class="edu-duration"><i class="fa fa-calendar"></i><time>%data%</time></div>';
var HTMLeduLocation = '<div class="edu-location"><i class="fa fa-map-marker"></i><span class="location-description">%data%</span></div>';
var HTMLmajor2 = '<p class="major"><span class="major-head">Major: </span><span class="major-desc">%data%</span></p>'
