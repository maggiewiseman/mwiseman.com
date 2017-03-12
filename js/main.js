//var apBtn = document.getElementById('grid-item-ap');
//console.log(apBtn);
//apBtn.addEventListener('mousenter', function() {
//	apBtn.toggle('btn-hover');
//});


$(document).on('mouseenter', '.grid-item-btn, .grid-item-project-btn, .email-btn', function(e) {
	var event = e;
	console.log(event);
	$(e.target).toggleClass('btn-hover');
	
	$(e.target.childNodes[1].id).toggleClass('btn-hover-a');
})

$(document).on('mouseleave', '.grid-item-btn, .grid-item-project-btn, .email-btn', function(e) {
	$(e.target).toggleClass('btn-hover');
})