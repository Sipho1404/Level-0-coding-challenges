function celciusToFahrenheit(celcius){

    var fahrenheit = (9/5)*celcius + 32;

    return fahrenheit;
}

function fahrenheitToCelcius(fahrenheit){

    var celcius = (fahrenheit - 32)*(5/9);

    return celcius;
}

console.log(celciusToFahrenheit(25));
console.log(fahrenheitToCelcius(104));