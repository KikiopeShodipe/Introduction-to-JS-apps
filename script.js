//create a function to calculate the area
function calculate(){
    //ask the user for the shape
    const shape = prompt("Enter the shape (circle, triangle, rectangle or square):").
    toLowerCase();
    let area = 0;
    //check the shape
    if (shape == 'circle'){
        const radius = parseFloat(prompt("Enter the radius0")); //ask the user for the radius
        area = Math.PI * radius; //clculate the area
        alert("THe are of the circle is,are"); //display the area
    }
    else if (shape == 'rectangle'){
        const lenght = parseFloat(prompt("Enter the lenght"));
        const width = parseFloat(prompt("Enter the width"));
        area = lenght * width; //claculate the area
        alert("The area of the rectangle is:",area); //display the area
    }
    else if (shape == 'triangle'){
        const base = parseFloat(prompt("Else the base")); //ask user for the base
        const height = parseFloat(prompt("Enter the height")); //ask user for the height
        area = 0.5 * base * height; //calculate the area
        alert("The are of the triangle is:",area); //display the area
    }
    else if (shape == 'sqaure'){
        const side = parseFloat(prompt("Enter the side:")); //ask the user for the side
        area = side * side; //calculate the area
        alert("The area of the square is:",area); //display the area
    }
    else{
        alert("Invalid shape!"); //display an error message
    }
}