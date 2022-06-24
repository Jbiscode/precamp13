function ascendingOrder(){
    var a1 = 'cdeabfg'
    
    a1 = a1.split("").sort().join("");
    
    document.getElementById("Q1").innerText = a1

}


function orderCapitalize(){
    var a2 = 'Strawberry,Grape,Apple,Banana'

    a2 = a2.toUpperCase().split(',').sort().join(',')

    document.getElementById("Q2").innerText = a2
}


function changeWord(){
    var a3 = "말 그대로 '사과색', 즉 주황색의 둥근 모양 과일이다. 사과는 귤과 비슷하나 귤보다 더 크고 껍질이 두껍고 질겨 약간 단단한 느낌이 든다. 사과는 속껍질까지 해체하면 그냥 큰 귤같다."
    
    document.getElementById("Q3").innerText = a3.replaceAll("사과","오렌지");
}