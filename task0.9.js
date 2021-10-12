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
    let finalVowels = "";
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
//for( var i = 0; i < newVowel.length; i++){
   if(newVowel.length == 1){
      finalVowels = newVowel;
   }
  //  else if(i < newVowel.length){
      else{
        for(var i = 0; i < newVowel.length; i++){
        newWord += newVowel[i] + ",";
        }
        for(var i = 0; i <= newWord.length - 2; i++){
         finalVowels += newWord[i];

}
   }

//}

console.log("Vowels = " + finalVowels);
}

printVowels("Umuzi");
printVowels("books");
printVowels("coding");
printVowels("GENERAL");
printVowels("bat");