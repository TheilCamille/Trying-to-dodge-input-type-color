    // Get value of input type range
    var range1 = document.getElementById("rgb1").value;
    var range2 = document.getElementById("rgb2").value;
    var range3 = document.getElementById("rgb3").value;
    var range4 = document.getElementById("rgb4").value;

    // Get the label
    var label1 = document.getElementById("lb1");
    var label2 = document.getElementById("lb2");
    var label3 = document.getElementById("lb3");
    var label4 = document.getElementById('lb4');


// We call the function for the initial label value
myRange();

function changeColor() {
        // Change the background color of the second <section> with the rgba value of range input
    document.getElementById('showMe').style.background = "rgba(" + range1 + "," + range2 + "," + range3 +"," + range4 + ")";
}

function generateCode() {
        // Change html of the third <section> with the css code of a background-color change with rgba value
    document.getElementById('showMeCode').innerHTML= "background-color: rgba(" + range1 + "," + range2 + "," + range3 +"," + range4 + ")";
}

function myRange() {
        // Change the label value for the input range value
    label1.innerHTML= range1;
    label2.innerHTML= range2;
    label3.innerHTML= range3;
    label4.innerHTML= range4;
}
