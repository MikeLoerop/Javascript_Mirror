
//Get starting and ending values
function getValues () {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    

    //Parse inputs into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    }else{
        alert("You must enter integers");
    }

    
}

//Generate numbers from startValue to endValue
function generateNumbers(startValue, endValue){
    let numbers = [];

    for (let i = startValue; i <= endValue; i++) {
        numbers.push(i);
    }

    return numbers;
}

//Display the numbers and mark the even numbers bold
function displayNumbers(numbers) {
    let templateRow = "";
    
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        let className = "even";
        if(number % 2 == 0){
            className
        }else{

            className = "odd";
            
        }

        templateRow += `<tr><td class="${className}">${number}</td><tr>`;
                
    }

    document.getElementById("results").innerHTML = templateRow;
}