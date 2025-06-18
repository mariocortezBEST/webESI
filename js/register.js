document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const user = { email, password };
    localStorage.setItem('usuario', JSON.stringify(user));
    alert('Registro exitoso. Ahora podés iniciar sesión.');
    window.location.href = 'index.html';
  });
  