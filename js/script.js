// jQuery(function($) {
//     $('.more-skill').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
//         if (visible) {
//             $('.chart').easyPieChart({
//                 //your configuration goes here
//                 easing: 'easeOut',
//                 delay: 3000,
//                 barColor:'#68c3a3',
//                 trackColor:'rgba(255,255,255,0.2)',
//                 scaleColor: false,
//                 lineWidth: 8,
//                 size: 140,
//                 animate: 2000,
//                 onStep: function(from, to, percent) {
//                     this.el.children[0].innerHTML = Math.round(percent);
//                 }

//             });
//             $(this).unbind('inview');
//         }
//     });
// })

console.log("loaded");

(function () {
    $('a[href*="#"]').bind("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
}());

function scrollNav() {
    $('.nav a').click(function () {
        //Toggle Class
        $(".active").removeClass("active");
        $(this).closest('li').addClass("active");
        var theClass = $(this).attr("class");
        $('.' + theClass).parent('li').addClass('active');
        //Animate
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 400);
        return false;
    });
    $('.scrollTop a').scrollTop();
}
scrollNav();