

var show = function (elem) {
	elem.style.display = 'block';
};

var hide = function (elem) {
	elem.style.display = 'none';
};

var toggle = function (elem) {
	if (window.getComputedStyle(elem).display === 'block') {
		hide(elem);
		return;
	}
	show(elem);
};

function changeMenu(menu) {
  if (menu && menu >= 1 && menu <= 3) {
    for (var i = 1; i <= 3; i++) {
      document.getElementById('menu-' + i).style.display = 'none';
    }
    document.getElementById('menu-' + menu).style.display = 'block';   
  }
}

let ham = document.getElementById('btn-ham');
if (ham) {
  ham.addEventListener('click', function() {
    toggle(document.getElementById('bottom-navbar'));
  });
}

(function() {
  changeMenu(1);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('worker.js')
    .then(() => console.log('Service Worker registered'))
    .catch ((error) => console.log('Registration failed:', error));
  }
}) ();