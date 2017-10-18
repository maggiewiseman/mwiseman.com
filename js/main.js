//var apBtn = document.getElementById('grid-item-ap');
//console.log(apBtn);
//apBtn.addEventListener('mousenter', function() {
//	apBtn.toggle('btn-hover');
//});


//$(document).on('mouseenter', '.grid-item-btn, .grid-item-project-btn, .email-btn', function(e) {
//	var event = e;
//	console.log(event);
//	$(e.target).toggleClass('btn-hover');
//})
//
//$(document).on('mouseleave', '.grid-item-btn, .grid-item-project-btn, .email-btn', function(e) {
//	$(e.target).toggleClass('btn-hover');
//})

(function() {
    var showMenuBtn = document.getElementById('menu-icon');

    showMenuBtn.addEventListener('click', function(e) {
        console.log("clicked!", e.target);
        document.getElementsByTagName('aside')[0].classList.add('open');
    });

}());
