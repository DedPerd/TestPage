'use strict'

const isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

if(isMobile.any()){
	document.body.classList.add('__touch');
} else {
	document.body.classList.add('__pc');
}
//burger menu
const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(menuIcon && menuBody){
	menuIcon.addEventListener('click', function(event){
		document.body.classList.toggle('_lock')
		menuIcon.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

function downloadResume(){
	alert('Download?')
}