let numField1 = document.getElementById("numField1");
let numField2 = document.getElementById("numField2");
let numField3 = document.getElementById("numField3");
let numField4 = document.getElementById("numField4");
let resultField = document.getElementById("resultField");
let hiddenElement=document.querySelector(".container")
let sound=new Audio('buttonSound.wav')
let form = document.getElementById("magicSquare")

form.addEventListener("submit", function(event){
     event.preventDefault();
     sound.play();

    if(!numField1.value || !numField2.value || !numField3.value || !numField3.value){
        alert("Enter the value in field")
    }
    else{
        hiddenElement.style.display="grid"
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
        
        

        document.querySelector(".box1").innerText = a;  
        document.querySelector(".box2").innerText =b;
        document.querySelector(".box3").innerText=c;
        document.querySelector(".box4").innerText=d;   
        document.querySelector(".box5").innerText =a1;
        document.querySelector(".box6").innerText =a2;
        document.querySelector(".box7").innerText =a3;
        document.querySelector(".box8").innerText =a4;
        document.querySelector(".box9").innerText =b1;
        document.querySelector(".box10").innerText =b2;
        document.querySelector(".box11").innerText =b3;
        document.querySelector(".box12").innerText =b4;
        document.querySelector(".box13").innerText =c1;
        document.querySelector(".box14").innerText =c2;
        document.querySelector(".box15").innerText =c3;
        document.querySelector(".box16").innerText =c4;
        document.querySelector("#heading").innerText =`Your Magic Number Is ${a+a1+b1+c1}`
        // document.querySelector(".box").innerText =a+a1+b1+c1;

        
        
    }

})