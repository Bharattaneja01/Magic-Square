let numField1 = document.getElementById("numField1");
let numField2 = document.getElementById("numField2");
let numField3 = document.getElementById("numField3");
let numField4 = document.getElementById("numField4");
let resultField = document.getElementById("resultField");
let form = document.getElementById("magicSquare")

form.addEventListener("submit", function(event){
  
    if(!numField1.value || !numField2.value || !numField3.value || !numField3.value){
        alert("Enter the value in field")
    }
    else{
        let a = parseFloat(numField1.value);
        let b = parseFloat(numField2.value);
        let c = parseFloat(numField3.value);
        let d = parseFloat(numField4.value);
        let a1=d+1;
        let a2=c-1;
        let a3=b-3;
        let a4=a+3;
        let b1=b-2;
        let b2=a+2;
        let b3=d+2;
        let b4=c-2;
        let c1=c+1;
        let c2=d-1;
        let c3=a+1; 
        let c4=b-1;
        
        

        resultField1.innerText = a;  
        resultField2.innerText =b;
        resultField3.innerText=c;
        resultField4.innerText=d;   
        resultField5.innerText =a1;
        resultField6.innerText =a2;
        resultField7.innerText =a3;
        resultField8.innerText =a4;
        resultField9.innerText =b1;
        resultField10.innerText =b2;
        resultField11.innerText =b3;
        resultField12.innerText =b4;
        resultField13.innerText =c1;
        resultField14.innerText =c2;
        resultField15.innerText =c3;
        resultField16.innerText =c4;
        resultField17.innerText ="Your Lucky Number Is Here";
        resultField18.innerText =a+a1+b1+c1;

        
        event.preventDefault();
    }

})