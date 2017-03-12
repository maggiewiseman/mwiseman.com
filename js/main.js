//var apBtn = document.getElementById('grid-item-ap');
//console.log(apBtn);
//apBtn.addEventListener('mousenter', function() {
//	apBtn.toggle('btn-hover');
//});


$(document).on('mouseenter', '.grid-item-btn, .grid-item-project-btn, .email-btn', function(e) {
	console.log(e);
	$(e.target).toggleClass('btn-hover');
})

$(document).on('mouseleave', '.grid-item-btn, .grid-item-project-btn, .email-btn', function(e) {
	$(e.target).toggleClass('btn-hover');
})