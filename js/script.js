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

// Progress bars
$('.skill-bar').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
	if (visible) {
		$.each($('div.progress-bar'), function () {
			$(this).css('width', $(this).attr('aria-valuenow') + '%');
		});
		$(this).unbind('inview');
	}
});

// More skills pie charts
var once = false;
$('.more-skill').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
	if (visible) {
		$('.chart').easyPieChart({
			easing: 'easeOut',
			delay: 3000,
			barColor: '#337ab7',
			trackColor: 'rgba(255,255,255,0.2)',
			scaleColor: false,
			lineWidth: 8,
			size: 140,
			animate: 2000,
		});
		if (!once) {
			addMoreSkillTitles();
			once = true;
		}
		$(this).unbind('inview');
	}
});

function addMoreSkillTitles() {
	let skills = ['HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'Source Control: Git/Perforce', 'MongoDB']
	let elems = document.getElementsByClassName('chart');
	for (let i = 0; i < elems.length && i < skills.length; i++) {
		let elem = elems[i];
		let div = document.createElement('div');
		div.classList.add('chart-text');
		div.classList.add('text-center');
		div.innerHTML = `<span>${skills[i]}</span>`
		elem.appendChild(div);
	}
}