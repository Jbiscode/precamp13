// setTimeout(function(){
//     console.log("펑")},3000)


// setInterval(function(){
//     console.log("펑")},1000)



let time = 10
setInterval(function(){
    if (time>=0){
        const min = String(Math.floor(time/60)).padStart(2,"0")
        const sec = String(time%60).padStart(2,"0")
        console.log(min+":"+sec)
        time = time-1

    }
},1000)