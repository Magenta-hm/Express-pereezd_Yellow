/*==============================БУРГЕР-МЕНЮ==============================*/
var burger = document.getElementById('burger');
var menuElements = document.getElementsByClassName('nav-item');
var flag = true;

burger.onclick = function() {
	if ( flag ) {
		for ( var i = 0; i < menuElements.length; i++ ) {
			menuElements[ i ].classList.add( "nav-item-visible" );
		}
		flag = false;
		burger.style.backgroundImage = 'url(img/close-menu.svg)';
	} else {
		for ( var i = 0; i < menuElements.length; i++ ) {
			menuElements[ i ].classList.remove( "nav-item-visible" );
		}
		flag = true;
		burger.style.backgroundImage = 'url(img/burger-menu.svg)';
	}
};





