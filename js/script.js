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
Chart.defaults.global.legend.display = false;
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        backgroundColor: 'rgba(0, 0, 0, 1)',
        borderColor: 'red',
        datasets: [{
            backgroundColor: [
                'red',
                'white'
            ],
            data: [70, 30]
        }],
        borderWidth: [100, 100]
    },
    options: {
        events: [],
        cutoutPercentage: 70,
        animation: {
            animateRotate: false,
            animateScale: false
        }
    }
})