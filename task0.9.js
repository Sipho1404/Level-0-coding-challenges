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
    let vowels = "";
    let newVowels = "";
    let newWord = "";
    for(var i = 0; i <= newString.length; i++){
       
        vowels += checkVowels(newString[i]); 
    
}
let value=false;
let newVowel=vowels[0];
let x=0;
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
for( var i = 0; i < newVowel.length; i++){
   if(newVowel.length == 1){
      newWord = newVowel[i];
   }
    else if(i < newVowel.length){
        newWord += newVowel[i] + ",";
   }

}
console.log("Vowels = " + newWord);
}

printVowels("Umuzi");
printVowels("books");
printVowels("coding");
printVowels("GENERAL");
printVowels("bat");