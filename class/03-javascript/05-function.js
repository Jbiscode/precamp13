let isStarted = false;    //변수를 바깥에 설정해놔야 확실히 적용이된다.

const pressedBtn=()=>{

    if (isStarted===false){

        isStarted=true;

        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("auth").innerText =token
        document.getElementById("auth").style.color ="#"+ token

        let time = 3

        const cfBtn = document.getElementById("cf");
        cfBtn.disabled = false;


        // let getTime = null                  위에안쓰고
        //getTime =  이렇게안하고           (const , let)  getTime = 지정해도 됌

        let getTime = null
        getTime = setInterval(function(){
            
            if (time>=0){
                const min = String(Math.floor(time/60)).padStart(1,"0")
                const sec = String(time%60).padStart(2,"0")
                document.getElementById("timer").innerText = min+":"+sec
                time = time-1
                const cfBtn = document.getElementById("cf");
                cfBtn.disabled = false;
                console.log(time)
            }else{
                const cfBtn = document.getElementById("cf");
                cfBtn.disabled = true;

                clearInterval(getTime)
                isStarted=false;
            }
        },1000)

    }else{
        alert("타이머가 이미 동작중입니다")
    }
}