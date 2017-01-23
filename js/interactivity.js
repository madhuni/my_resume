// /* executing the script on loading of the complete dom */
// /* similar way we can pass the call back function in the jQuery object
    
//     $(function() {
//         --do something here--
//     });

//     or we can use this:

//     $(document).ready(function() {
//         --do something here--
//     });
    
// */

// // getting the viewport width
// var viewportWidth = $(window).width();
// // console.log(viewportWidth);
// var workArticle = $('#work-experience').find('.work-article');
// var projectArticle = $('#projects').find('projects-article');
// var eduArticle = $('#educaiton').children('section');
// // console.log(eduArticle);

// var workSectionHeading = $("#work-experience").find('.section-heading');
// var projectSectionHeading = $("#projects").find('.section-heading');
// var eduSectionHeading = $("#educaiton").find('.section-heading');
// // console.log(eduSectionHeading);

// function checkSize() {

//     var containerWidth = $('main').width(); //numeric value
//     var sectionWidth = $('#section-container').width(); //numaric value

//     // console.log(containerWidth);
//     // console.log(sectionWidth);

//     if(sectionWidth == containerWidth-20) {
//         // console.log("Hi I am in the loop");
//         workArticle.hide();
//     } else {
//         // console.log("if statement is not working");
//         workArticle.show();
//         projectArticle.show();
//         eduArticle.show();
//         workSectionHeading.click(function(evt) {

//             $('.work-article').stop();
        
//         });
//         projectSectionHeading.click(function(evt) {

//             $('.projects-article').stop();
        
//         });
//         eduSectionHeading.click(function(evt) {

//             eduArticle.stop();
        
//         });
//     }
// };

// // var workArticle = $('#work-experience').find('.work-article');
// // var workSectionHeading = $("#work-experience").find('.section-heading');
// // console.log(wrokArticle);

// $(document).ready(function() {
//     checkSize();

//     $(window).resize(checkSize);

//     workSectionHeading.click(function(evt) {

//         $('.work-article').slideToggle();
        
//     });
//     projectSectionHeading.click(function(evt) {

//         $('.projects-article').slideToggle();
        
//     });
//     eduSectionHeading.click(function(evt) {

//         eduArticle.slideToggle();
        
//     });
// });

 $(function($) {

    var tapTarget = $('#work-experience').children('.section-heading');
    var toggleTarget = $('#work-experience').children('.work-article');
    var hrRule = $('#work-experience').children('hr');
    
     tapTarget.click(function(evt) {
         toggleTarget.slideToggle();
         hrRule.slideToggle();
     });

    var moreDetails= $('.work-article').children('.more-details');

    moreDetails.click(function(evt) {
        
        var parentElement = (evt.target).parentElement;
        var desc = $(parentElement).children('.more-details').text();
        var target = $(parentElement).children('.job-description');

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

});