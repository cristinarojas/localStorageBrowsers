let loginButton = document.getElementById('login');

const adminUser = 'admin';
const adminPassowrd = '123456';

// Local Storage
let localUser = localStorage.getItem('user');
let localPassword = localStorage.getItem('password');

if (localUser === adminUser && localPassword === adminPassowrd) {
  document.getElementById('content').innerHTML = `Welcome ${localUser}`;
}

loginButton.addEventListener('click', () => {
  // Html data
  let user = document.getElementById('user').value || false;
  let password = document.getElementById('password').value || false;

  // localStorage.clear();
  if (user === adminUser && password === adminPassowrd) {
    localStorage.setItem('user', user);
    localStorage.setItem('password', password);

    window.location.reload();
  } else {
    alert('login incorrecto');
  }
}, false);
