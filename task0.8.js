function convertNumToTime(num){

    var hours = Math.floor(num/60);
    var minutes = num%60;
    if(minutes == 0 && hours == 1){
        console.log(hours + " hour");
    }
    else if(hours >= 2 && minutes == 0){
        console.log(hours + " hours");
    }
    else if(hours == 0){
        console.log(minutes + " minutes");
    }
    else if(hours == 0 && minutes == 0){
        console.log("00:00");
    }
    else if(hours == 1 && minutes == 1){
        console.log(hours + " hour" + ", "+ minutes + " minute");
    }
    else if(hours == 1 && minutes > 1){
        console.log(hours + " hour" + ", "+ minutes + " minutes");
    }

    else if(hours == 1 && minutes == 0){
        console.log(hours + " hour");
    }
    else if(hours >= 2 && minutes == 0){
        console.log(hours + " hours");
    }
    else{
        console.log(hours + " hours" + ", "+ minutes + " minutes");
    }

}

convertNumToTime(133);
convertNumToTime(71);
convertNumToTime(60);
convertNumToTime(67);
convertNumToTime(120);