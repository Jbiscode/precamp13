
function checkValidation(){//입력값에 빈칸이 없을때 회원가입 버튼 활성화시키는 함수
    
    const email = document.getElementById("email").value    //  (1)각각 입력값 불러오기 정의
    const pw1 = document.getElementById("pw1").value
    const pw2 = document.getElementById("pw2").value

    if (email!=="" && pw1!=="" && pw2!==""){

    document.getElementById("submit").disabled = false;
    document.getElementById("submit").setAttribute("style","background-color:yellow")

    }else{

    document.getElementById("submit").disabled = true;
    document.getElementById("submit").setAttribute("style","background-color:none")

    }

}