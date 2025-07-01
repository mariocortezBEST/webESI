document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const respuestas = {
      q1: document.getElementById('q1').value,
      q2: document.getElementById('q2').value,
      q3: document.getElementById('q3').value
    };
  
    let puntaje = 0;
    if (respuestas.q1 === 'c') puntaje++;
    if (respuestas.q2 === 'b') puntaje++;
    if (respuestas.q3 === 'b') puntaje++;
  
    let resultado = document.getElementById('resultado');
  
    if (puntaje === 3) {
      resultado.innerHTML = `<div class="alert alert-success">¡Excelente! Aprobaste el módulo con ${puntaje}/3.</div>`;
    } else {
      resultado.innerHTML = `<div class="alert alert-warning">Obtuviste ${puntaje}/3. Podés volver a intentarlo.</div>`;
    }
  
    // Guardar resultado local (puede integrarse a backend en el futuro)
    localStorage.setItem('modulo1_completado', puntaje >= 2 ? 'true' : 'false');
  });
  