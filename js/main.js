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
    var hideMenuBtn = document.getElementById('hide-menu-btn');
    var aside = document.getElementsByTagName('aside')[0];
    var list = document.getElementById('#nav-list');
    var captions = document.getElementsByClassName('caption');
    console.log(captions);


    showMenuBtn.addEventListener('click', function(e) {
        console.log("clicked!", e.target);
        aside.classList.add('open');
    });

    hideMenuBtn.addEventListener('click', function(e) {
        console.log("clicked close");
        aside.classList.remove('open');
    });

    list.addEventListener('click', function(e) {
        aside.classList.remove('open');
    });

    for(var i = 0; i < captions.length; i++) {
        captions[i].addEventListener('mouseenter', function(e) {
            console.log('hovering!', e);
            console.log('e.target: ', e.srcElement);
            if(e.target.classList[0] == 'caption') {
                var info = e.target.childNodes[0].innerHTML;
                console.log('info!!', info);
                var newDiv = document.createElement('div');
                newDiv.classList.add('tooltip');
                newDiv.innerHTML = info;
                console.log(this);
                this.appendChild(newDiv);
            }
        });

        captions[i].addEventListener('mouseleave', function(e) {
            console.log('leaving', e);
            this.removeChild(this.childNodes[1]);
        });
    }


}());
