// reusable function ===> reduce duplicate code
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}
function setElementInnerText(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;

}
//function for Triangle area calculate

function triangleAreaCalculate() {
  const base = getInputValue("triangle_base");
  const height = getInputValue("triangle_height");
  const area = 0.5 * base * height;

  // show triangle area total
  setElementInnerText('triangle_area',area);
}

// function for rectangle area calculate
function rectangleAreaCalculate() {
  const width = getInputValue("rectangle_width");
  const height = getInputValue("rectangle_length");
  const area = width * height;
  setElementInnerText('rectangle_area',area);

}

// function for rectangle area calculate
function parallelogramAreaCalculate() {
    const base = getInputValue("parallelogram_base");
    const height = getInputValue("parallelogram_height");
    const area = base * height;
  
    setElementInnerText('parallelogram_area',area);
  }