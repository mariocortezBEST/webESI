document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const r = {
      q1: document.getElementById('q1').value,
      q2: document.getElementById('q2').value,
      q3: document.getElementById('q3').value,
    };
  
    let score = 0;
    if (r.q1 === 'b') score++;
    if (r.q2 === 'b') score++;
    if (r.q3 === 'c') score++;
  
    const resultado = document.getElementById('resultado');
    if (score === 3) {
      resultado.innerHTML = `<div class="alert alert-success">¡Excelente! Aprobaste con ${score}/3.</div>`;
    } else {
      resultado.innerHTML = `<div class="alert alert-warning">Obtuviste ${score}/3. Podés revisar el contenido y volver a intentar.</div>`;
    }
  
    localStorage.setItem('modulo3_completado', score >= 2 ? 'true' : 'false');
  });
  