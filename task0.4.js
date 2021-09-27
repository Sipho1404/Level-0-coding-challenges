
function evenOrOdd(intNumber){
    if(intNumber%2 == 0){
        console.log("Even");
    }
    else if(intNumber <= 0){
        console.log("Invalid number");
    }
    else{
        console.log("Odd");
    }
}

evenOrOdd(6);
evenOrOdd(9);
evenOrOdd(5);
evenOrOdd(2);
evenOrOdd(10);
evenOrOdd(-1);

