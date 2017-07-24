$(function($) {
    
    /* Creating function for toggling the sections in the section-container */
    function toggleSections(parent) {
        var tapTarget = parent.children('.section-heading');
        var toggleTarget = parent.children('article');
        var toggleTarget2 = parent.find('.sub-section');
        var hrRule = parent.find('hr');

        tapTarget.click(function(evt) {
            // console.log("toggleSections function is working");
            // console.log(tapTarget);
            // console.log(toggleTarget);
            // console.log(toggleTarget2);
            // console.log(hrRule);
            toggleTarget.slideToggle();
            toggleTarget2.slideToggle();
            hrRule.slideToggle();
        });
    }

    function stopToggling(parent) {
        // console.log("stopToggling function is working");
        var tapTarget = parent.children('.section-heading');
        tapTarget.click(function(evt) {
            evt.stopPropagation();
        });
    }
    
/* Writing code for automatic toggle of the sections below some view-port size */
    function checkSize() {
        var projectParent = $('#projects');
        var jobParent = $('#work-experience');
        var eduParent = $('#educaiton');

        if (window.matchMedia('(min-width : 920px)').matches) {
            // console.log("i am in the if condition");
            stopToggling(projectParent);
            stopToggling(jobParent);
            stopToggling(eduParent);
        } else {
            // console.log("I am in the else condition");
            toggleSections(jobParent);
            toggleSections(projectParent);
            toggleSections(eduParent);
        }
    }

    // checkSize();
    // $(window).resize(checkSize);


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

    }

    var jobMoreDetails= $('.work-article').children('.more-details');
    var projectMoreDetails = $('.projects-article').children('.more-details');

    // Initializing the function
    displayMoreDetails(jobMoreDetails);
    // displayMoreDetails(projectMoreDetails);

});