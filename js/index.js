// reusable function ===> reduce duplicate code
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value; 
}

function triangleAreaCalculate(){
    const base = getInputValue('triangle_base')
    const height = getInputValue('triangle_height');
    const area = 0.5 * base * height;

    console.log("🚀 ~ file: index.js:14 ~ triangleAreaCalculate ~ area:", area)
    // show area total
    const triangleArea = document.getElementById('triangle_area');
    triangleArea.innerText = area;
    
}