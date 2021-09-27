function compareStrings(string1, string2){

    var newString1 = string1.toLowerCase();
    var newString2 = string2.toLowerCase();

    var newString = "";

    for( var i = 0; i < newString1.length; i++){
        for(var j = 0; j < newString2.length; j++){
            if(newString1[i] == newString2[j]){
               newString += newString1[i]; 
            }
           
        }
    }
    var value=false;
var newVowel=newString[0];
var x=0;
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
    console.log("Common Letters: " + newVowel);
}

compareStrings("house", "computers");
compareStrings("COST", "computers");
compareStrings("Brandy", "troley");
compareStrings("BOOST", "computors");
compareStrings("Umuzi", "Umuzi");