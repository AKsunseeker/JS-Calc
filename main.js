// function add(){
//   var inputOne = document.getElementById('input_1').value;
//   var inputTwo = document.getElementById('input_2').value;
//   var sum = parseFloat(inputOne) + parseFloat(inputTwo);
//   document.getElementById('output').innerHTML = sum;
// }

// function subtract(){
//   var inputOne = document.getElementById('input_1').value;
//   var inputTwo = document.getElementById('input_2').value;
//   var sum = parseFloat(inputOne) - parseFloat(inputTwo);
//   document.getElementById('output').innerHTML = sum;

// }

function getInputs(){
  var inputOne = parseFloat(document.getElementById('input_1').value);
  var inputTwo = parseFloat(document.getElementById('input_2').value);
  return [inputOne, inputTwo];
}
function lastAnswer () {
  var element = document.getElementById('output');
  if (element.innerHTML === '') {
    return '';
  } else {
    return parseFloat(element.innerHTML);
  }
}

function setOutput(sum) {
  document.getElementById('output').innerHTML = sum;
}

function add(){
  var inputs = getInputs();
  var sum = inputs[0] + inputs[1];
  setOutput(sum);
}

function subtract(){
  var inputs = getInputs();
  var sum = inputs[0] - inputs[1];
  setOutput(sum);
}
function divide(){
  var inputs = getInputs();
  var sum = inputs[0] / inputs[1];
  setOutput(sum);
}
function multi(){
  var inputs = getInputs();
  var sum = inputs[0] * inputs[1];
  setOutput(sum);
}
