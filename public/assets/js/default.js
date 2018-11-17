
if (ham = document.getElementById('btn-ham')) {
  ham.addEventListener('click', function() {
    alert('hey, open the door pleasee!');
  });
}

function changeMenu(menu) {
  if (menu && menu >= 1 && menu <= 3) {
    for (var i = 1; i <= 3; i++) {
      document.getElementById('menu-' + i).style.display = 'none';
    }
    document.getElementById('menu-' + menu).style.display = 'block';   
  }
}

(function() {
  changeMenu(2);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('worker.js')
    .then(() => console.log('Service Worker registered'))
    .catch ((error) => console.log('Registration failed:', error));
  }
}) ();