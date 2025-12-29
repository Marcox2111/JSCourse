let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

let area = length * width;
document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateTotal() {
    let Total
    Total = parseFloat(document.getElementById('G1').value);
    Total += parseFloat(document.getElementById('G2').value);
    Total += parseFloat(document.getElementById('G3').value);

    document.getElementById('total').innerText = `The total amount is:$ ${Total}`;

}