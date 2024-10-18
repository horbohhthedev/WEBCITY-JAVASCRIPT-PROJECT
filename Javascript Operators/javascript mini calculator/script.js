// MAIN OPERATORS
function myFunction(){

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let calculate = document.getElementById('operator').value;


    if( calculate==='+'){
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);
        document.getElementById('result').value=num1+num2;
    }

    if( calculate==='-'){
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);
        document.getElementById('result').value=num1-num2;
    }

    if( calculate==='/'){
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);
        document.getElementById('result').value=num1/num2;
    }

    if( calculate==='*'){
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);
        document.getElementById('result').value=num1*num2;
    }
   

   

}

 // MOBILE DEVICE BUTTON


 var n1 = document.getElementById("num1");
 var n2 = document.getElementById("num2");
 var res = document.getElementById("result");

 document.getElementById("add2").addEventListener("click", function() {
     res.value = parseInt(n1.value)+parseInt(n2.value)
 } )
 document.getElementById("sub3").addEventListener("click", function() {
     res.value = parseInt(n1.value)-parseInt(n2.value)
 } )
 document.getElementById("div4").addEventListener("click", function() {
     res.value = parseInt(n1.value)/parseInt(n2.value)
 } )
 document.getElementById("mul5").addEventListener("click", function() {
     res.value = parseInt(n1.value)*parseInt(n2.value)
 } )

