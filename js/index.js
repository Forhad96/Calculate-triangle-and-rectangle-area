// reusable function ===> reduce duplicate code
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

//function for Triangle area calculate

function triangleAreaCalculate() {
  const base = getInputValue("triangle_base");
  const height = getInputValue("triangle_height");
  const area = 0.5 * base * height;

  // show area total
  const triangleArea = document.getElementById("triangle_area");
  triangleArea.innerText = area;
}

// function for rectangle area calculate
function rectangleAreaCalculate() {
  const width = getInputValue("rectangle_width");
  const height = getInputValue("rectangle_length");
  const area = width * height;

  const rectangleArea = document.getElementById('rectangle_area');
  rectangleArea.innerText = area; 
}

// function for rectangle area calculate
