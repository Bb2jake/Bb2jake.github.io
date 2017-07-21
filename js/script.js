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