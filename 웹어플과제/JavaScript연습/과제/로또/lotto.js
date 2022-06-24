function numLotto(){
    var Num = [];
    var j;
    for (j = 0; j < 999; j++){
    var randomNum = Math.floor(Math.random()* 45) + 1;{
        if(Num.indexOf(randomNum) == -1)      
            Num.push(randomNum);  
            
            if (Num.length == 6){
                break;                            
            } 
        }
    }
    function sortNum(a,b){
        return a - b;
    }
    
    Num.sort(sortNum);
    
    document.getElementById("lotto__number").innerText = Num[0]+" "+Num[1]+" "+Num[2]+" "+Num[3]+" "+Num[4]+" "+Num[5];
}