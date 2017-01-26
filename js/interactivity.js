$(function($) {
    
    /* Creating function for toggling the sections in the section-container */
    function toggleSections(parent) {

        var tapTarget = parent.children('.section-heading');
        var toggleTarget = parent.children('article');
        var toggleTarget2 = parent.find('.sub-section');
        var hrRule = parent.find('hr');

        tapTarget.click(function(evt) {
            toggleTarget.slideToggle();
            toggleTarget2.slideToggle();
            hrRule.slideToggle();
        });
    };
    var projectParent = $('#projects');
    var jobParent = $('#work-experience');
    var eduParent = $('#educaiton');
    
    // Initializing the function
    toggleSections(jobParent);
    toggleSections(projectParent);
    toggleSections(eduParent);
    
    
    /* Writing code for automatic toggle of the sections below some view-port size */
    var viewportWidth = $(window).width();
   // console.log(viewportWidth);
    
    /*function checkSize() {
        
        var containerWidth = $('main').width(); //numeric value
        var sectionWidth = $('#section-container').width(); //numaric value
       // console.log(containerWidth);
       // console.log(sectionWidth);
        var jobParent = $('#work-experience');

        if(sectionWidth === containerWidth-20) {
            console.log("I am in the if section");
            jobParent.children('.work-article').addClass('hidden');
            jobParent.children('hr').addClass('hidden');
            toggleSections(jobParent);
        } else {
            console.log("I am in else section");
            jobParent.children('.work-article').removeClass('hidden');
            jobParent.children('hr').removeClass('hidden');
           // stopToggleSection(jobParent);
        }
    };
    
    checkSize();
    console.log("rezie funtion is running here");
    $(window).resize(checkSize);*/


/* Creating function for displaying hidden details in the articles */ 
    function displayMoreDetails(moreDetails) {
        // console.log(moreDetails);

        moreDetails.click(function(evt) {
        
            var parentElement = (evt.target).parentElement;
            var desc = $(parentElement).children('.more-details').text();
            var target = $(parentElement).children('p');

            // console.log($(parentElement).children('i'));

            if (desc === "Show more") {
                target.slideToggle();
                $(parentElement).children('.more-details').text("Show less");
                $(parentElement).children('i').toggleClass('fa-angle-down').addClass('fa-angle-up');
            } else {
                target.slideToggle();
                $(parentElement).children('.more-details').text("Show more");
                $(parentElement).children('i').toggleClass('fa-angle-up').addClass('fa-angle-down');
            }
        });

    };

    var jobMoreDetails= $('.work-article').children('.more-details');
    var projectMoreDetails = $('.projects-article').children('.more-details');

    // Initializing the function
    displayMoreDetails(jobMoreDetails);
    displayMoreDetails(projectMoreDetails);

});