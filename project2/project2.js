const calculate= document.querySelector('#hit')

calculate.addEventListener('click',function(e){

    const heightInput= document.querySelector('.height input').value;
    const weightInput= document.querySelector('.weight input').value;
    const result= document.querySelector('.result');

    const height= parseFloat(heightInput);
    const weight= parseFloat(weightInput);

    if((heightInput.trim() === '' || isNaN(height)) || height <= 0){
        result.innerHTML = "Give a valid height";
        return;
    }

    if((weightInput.trim() === '' || isNaN(weight)) || weight <= 0){
        result.innerHTML = "Give a valid weight";
        return;
    }
    
    const heightInMeters = height/100;
    const bmi = weight / (heightInMeters * heightInMeters)

    result.innerHTML = `Your BMI is ${bmi.toFixed(2)}` 

});
