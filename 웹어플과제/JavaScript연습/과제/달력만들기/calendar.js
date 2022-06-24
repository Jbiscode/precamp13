window.addEventListener("load",onWindowReady);
var currentYear = 2022;
var currentMonth = 6;

function onWindowReady(){
    setCalendar(currentYear,currentMonth);
    registEvent();

}

function registEvent(){
    var prevMBtn = document.querySelector('#prevMBtn');
    var nextMBtn = document.querySelector('#nextMBtn');

    prevMBtn.addEventListener("click",function(){
        
        if(currentMonth<=1){
            currentMonth = 12;
            currentYear = currentYear - 1;
            clearCalendar();
            setCalendar(currentYear,currentMonth);
            document.getElementById('currentYearTxt').innerText = currentYear + "년"
            document.getElementById('currentMonthTxt').innerText = currentMonth + "월"
        }else{
            currentMonth = currentMonth -1;
            clearCalendar();
            setCalendar(currentYear,currentMonth);
            document.getElementById('currentMonthTxt').innerText = currentMonth + "월"
        }
    })
    nextMBtn.addEventListener("click",function(){
        if(currentMonth>=12){
            currentMonth = 1;
            currentYear = currentYear + 1;
            clearCalendar();
            setCalendar(currentYear,currentMonth);
            document.getElementById('currentYearTxt').innerText = currentYear + "년"
            document.getElementById('currentMonthTxt').innerText = currentMonth + "월"
        }else{
            currentMonth = currentMonth + 1;
            clearCalendar();
            setCalendar(currentYear,currentMonth);
            document.getElementById('currentMonthTxt').innerText = currentMonth + "월"
        }

    })
}
function clearCalendar(){
    var cells, weeks = document.querySelectorAll("tbody tr");

    var i, len = weeks.length;
    for(i=0; i<len;i++){
        cells = weeks[i].querySelectorAll("td");

        var j,jlen = cells.length;
        for( j=0; j<jlen; j++ ){
            cells[j].innerText = "";
        }
    }
}

function setCalendar(currentYear, currentMonth){
    var d =new Date (currentYear + '-' + currentMonth);
    
    d.setMonth(d.getMonth() + 1);
    d.setDate(0);
    var lastDate = d.getDate();
    
    d.setDate(1);
    var startCellNum = d.getDay();
    var weeks = [];
    
    var currentWeekNum = 0;
    var nextDateNum = 0;
    var currentDate = 0;

    weeks = document.querySelectorAll("tbody tr");
    var cells = weeks[currentWeekNum].querySelectorAll("td");

    

    while(true){
        currentDate = currentDate + 1;
        
        if(lastDate < currentDate) break;

        d.setDate(currentDate);
        if(cells.length <= startCellNum + nextDateNum){
            startCellNum = 0;
            nextDateNum = 0;
            currentWeekNum = currentWeekNum + 1;
            cells = weeks[currentWeekNum].querySelectorAll("td");
        }
        cells[startCellNum + nextDateNum].innerText = currentDate;
        nextDateNum = nextDateNum + 1;
    }
}