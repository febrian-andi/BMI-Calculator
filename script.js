const calculate = document.getElementById("calculate");

calculate.addEventListener("click", function(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let BMI =  weight/((height/100)*(height/100));
    document.getElementById("result").innerText=BMI.toFixed(2);
   
    const descriptionBMI = document.getElementById("description-BMI");;

    if (BMI < 18.5){
        descriptionBMI.innerText = "Underweight";
        console.log("Underweight");
    }else if (BMI >= 18.5 && BMI <= 24.9){
        descriptionBMI.innerText = "Normal";
        console.log("Normal");
    }else if (BMI >= 24.9 && BMI <= 29.9){
        descriptionBMI.innerText = "Overweight";    
        console.log("Overweight");
    }else if (BMI > 29.9){
        descriptionBMI.innerText = "Obese";
        console.log("Obese");
    }else if (height == '' || weight == ''){
        alert("Please enter a valid number");
    }
});
