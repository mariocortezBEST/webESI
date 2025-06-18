document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const savedUser = JSON.parse(localStorage.getItem('usuario'));
  
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      localStorage.setItem('sesionIniciada', 'true');
      window.location.href = 'dashboard.html';
    } else {
      alert('Credenciales incorrectas.');
    }
  });
  