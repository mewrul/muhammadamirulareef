function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let bmi = weight / Math.pow(height / 100, 2);
    let bmiCategory = '';

    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }

    document.getElementById('result').innerHTML = 'BMI: ' + bmi.toFixed(2) + ' - ' + bmiCategory;
    alert('Your BMI is: ' + bmi.toFixed(2) + ' - ' + bmiCategory);
}
