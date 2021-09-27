

function maximum(a,b,c,d){

    if(a >= b){
        if(a >= c){
            
            return a;

        }
        else{
            
            return c;
        }
    }
    else if( b >= c){
        if(b >= d){
           
            return b;
        }
        else{
            
            return d;
        }
    }
    else{
        if(c >= d){
            
            return c;
        }
        else{
            
            return d;
        }
    }

} 
maximum(1,2,3,4);
maximum(1,22,3,2);
maximum(14,2,7,8);
maximum(14,2,15,8);
 