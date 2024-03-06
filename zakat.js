function calculateZakat() {
  let income = document.getElementById('income').value;
  let zakat = income * 0.025;
  document.getElementById('result').innerHTML = 'Your zakat is: RM ' + zakat.toFixed(2);
  alert('Your zakat is= RM' + zakat);
}