function checkVowels(x){

    switch (x){
        case "a":
            return "a";
        case "e":
            return "e";
        case "i":
            return "i";
        case "o":
            return "o";
        case "u":
            return "u";
        default :
           return "";
    }
}
function printVowels(stringName){

    newString = stringName.toLowerCase();
    var vowels = "";
    var newVowels = "";
    for(var i = 0; i <= newString.length; i++){
       
        vowels += checkVowels(newString[i]); 
    
}
var value=false;
var newVowel=vowels[0];
var x=0;
for(var i = 0; i < vowels.length; i++){
    for(var j = 0; j < newVowel.length; j++){
    if(vowels[i]!=newVowel[j])
    {
    x++;
    }
    }
    if(x==newVowel.length)
    {
        newVowel+=vowels[i];
    }
    x=0;
}
    console.log("Vowels = " + newVowel);

}

printVowels("Umuzi");
printVowels("books");
printVowels("coding");
printVowels("GENERAL");