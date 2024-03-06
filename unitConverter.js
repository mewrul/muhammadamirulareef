function convertUnit() {
  let input = document.getElementById("input").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let result;

  if (from === "cm" && to === "metre") {
    result = input / 100;
  } else if (from === "metre" && to === "cm") {
    result = input * 100;
  } else if (from === "metre" && to === "km") {
    result = input / 1000;
  } else if (from === "km" && to === "metre") {
    result = input * 1000;
  }else if (from === "km" && to === "cm") {
    result = input * 100000;
  }else if (from === "cm" && to === "km") {
    result = input / 100000;
  } else if (from === "celsius" && to === "fahrenheit") {
    result = (input * 9/5) + 32;
  } else if (from === "fahrenheit" && to === "celsius") {
    result = (input - 32) * 5/9;
  } else {
    result = "Invalid units";
  }

  document.getElementById("result").innerHTML = "Result: " + result;
  alert('Your Result is= ' + result);
}