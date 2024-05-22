function calculate() {
  const p1 = parseFloat(document.getElementById("p1").value);
  const p2 = parseFloat(document.getElementById("p2").value);
  const n2 = parseFloat(document.getElementById("n2").value);
  const participation = parseFloat(
    document.getElementById("participation").value
  );

  if (
    isNaN(p1) ||
    p1 < 0 ||
    p1 > 10 ||
    isNaN(p2) ||
    p2 < 0 ||
    p2 > 10 ||
    isNaN(n2) ||
    n2 < 0 ||
    n2 > 10 ||
    isNaN(participation) ||
    participation < 0 ||
    participation > 1
  ) {
    alert("Por favor, preencha todas as notas corretamente.");
    return;
  }

  const n1 = (p1 + p2) / 2;
  const ms = (n1 * 6 + n2 * 4) / 10 + participation;

  let resultText = `<p>Sua média semestral é: ${ms.toFixed(2)}</p>`;

  if (ms >= 6) {
    resultText += `<p>Status: Aprovado</p>`;
  } else {
    resultText += `<p>Status: Avaliação final necessária</p>`;
  }

  document.getElementById("result").innerHTML = resultText;

  document.getElementById("p1").value = "";
  document.getElementById("p2").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("participation").value = "";
}
