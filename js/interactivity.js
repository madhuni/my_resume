/* executing the script on loading of the complete dom */
/* similar way we can pass the call back function in the jQuery object
    
    $(function() {
        --do something here--
    });

    or we can use this:

    $(document).ready(function() {
        --do something here--
    });
    
*/

$(function($) {

    /* Creating function for toggling the sections in the section-container */
    function toggleSections(parent) {

        var tapTarget = parent.children('.section-heading');
        var toggleTarget = parent.children('article');
        var hrRule = parent.children('hr');
        
        tapTarget.click(function(evt) {
            toggleTarget.slideToggle();
            hrRule.slideToggle();
        });

    };

    var jobParent = $('#work-experience');
    var projectParent = $('#projects');


    // Initializing the function
    // toggleSections(jobParent);
    // toggleSections(projectParent);

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