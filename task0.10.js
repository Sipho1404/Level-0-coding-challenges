function compareStrings(string1, string2){

    let newString1 = string1.toLowerCase();
    let newString2 = string2.toLowerCase();

    let newString = "";
    let newWord = "";
    let finalVowel = "";

    for( var i = 0; i < newString1.length; i++){
        for(var j = 0; j < newString2.length; j++){
            if(newString1[i] == newString2[j]){
               newString += newString1[i]; 
            }
           
        }
    }
    var value=false;
let newVowel=newString[0];
let x=0;
for(var i = 0; i < newString.length; i++){
    for(var j = 0; j < newVowel.length; j++){
    if(newString[i]!=newVowel[j])
    {
    x++;
    }
    }
    if(x==newVowel.length)
    {
        newVowel+=newString[i];
    }
    x=0;
}
//for( var i = 0; i < newVowel.length; i++){
    if(newVowel.length == 1){
       finalVowel = newVowel;
    }
     else{
        for( var i = 0; i < newVowel.length; i++){
         newWord += newVowel[i] + ",";
        }
        for( var i = 0; i < newWord.length - 1; i++){
            finalVowel += newWord[i];
        }
    
 }

 console.log("Vowels = " + finalVowel);
}

compareStrings("house", "computers");
compareStrings("COST", "computers");
compareStrings("Brandy", "troley");
compareStrings("BOOST", "computors");
compareStrings("Umuzi", "Umuzi");