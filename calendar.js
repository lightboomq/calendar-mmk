const arrMonths =  ['January','February','March','April','May','June','Jule','August','September','October','November','December'];
const arrMonthRu = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const brigade = [
    {
        January:{
            count:0,startWorkDay:2,shift:0,days:31 
        },
        February:{
            count:1,startWorkDay:0,shift:3,days:29
        },
        March:{
            count:0,startWorkDay:2,shift:4,days:31
        },
        April:{
            count:1,startWorkDay:0,shift:0,days:30
        },
        May:{
            count:0,startWorkDay:1,shift:2,days:31
        },
        June:{
            count:0,startWorkDay:2,shift:5,days:30
        },
        Jule:{
            count:0,startWorkDay:0,shift:0,days:31
        },
        August:{
            count:0,startWorkDay:1,shift:3,days:31
        },
        September:{
            count:0,startWorkDay:2,shift:6,days:30
        },
        October:{
            count:0,startWorkDay:0,shift:1,days:31
        },
        November:{
            count:0,startWorkDay:1,shift:4,days:30
        },
        December:{
            count:1,startWorkDay:0,shift:6,days:31
        },
    },
    {
        January:{
            count:0,startWorkDay:0,shift:0,days:31 
        },
        February:{
            count:0,startWorkDay:1,shift:3,days:29
        },
        March:{
            count:0,startWorkDay:0,shift:4,days:31
        },
        April:{
            count:0,startWorkDay:1,shift:0,days:30
        },
        May:{
            count:1,startWorkDay:0,shift:2,days:31
        },
        June:{
            count:0,startWorkDay:0,shift:5,days:30
        },
        Jule:{
            count:0,startWorkDay:2,shift:0,days:31
        },
        August:{
            count:1,startWorkDay:0,shift:3,days:31
        },
        September:{
            count:0,startWorkDay:0,shift:6,days:30
        },
        October:{
            count:0,startWorkDay:2,shift:1,days:31
        },
        November:{
            count:1,startWorkDay:0,shift:4,days:30
        },
        December:{
            count:0,startWorkDay:1,shift:6,days:31
        },
    },
    {
        January:{
            count:0,startWorkDay:1,shift:0,days:31 
        },
        February:{
            count:0,startWorkDay:2,shift:3,days:29
        },
        March:{
            count:0,startWorkDay:1,shift:4,days:31
        },
        April:{
            count:0,startWorkDay:2,shift:0,days:30
        },
        May:{
            count:0,startWorkDay:0,shift:0,days:31
        },
        June:{
            count:0,startWorkDay:1,shift:5,days:30
        },
        Jule:{
            count:1,startWorkDay:0,shift:0,days:31
        },
        August:{
            count:0,startWorkDay:0,shift:3,days:31
        },
        September:{
            count:0,startWorkDay:1,shift:6,days:30
        },
        October:{
            count:1,startWorkDay:0,shift:1,days:31
        },
        November:{
            count:0,startWorkDay:0,shift:4,days:30
        },
        December:{
            count:0,startWorkDay:2,shift:6,days:31
        },
    },
    {
        January:{
            count:1,startWorkDay:0,shift:0,days:31 
        },
        February:{
            count:0,startWorkDay:0,shift:3,days:29
        },
        March:{
            count:1,startWorkDay:0,shift:4,days:31
        },
        April:{
            count:0,startWorkDay:0,shift:0,days:30
        },
        May:{
            count:0,startWorkDay:2,shift:0,days:31
        },
        June:{
            count:1,startWorkDay:0,shift:5,days:30
        },
        Jule:{
            count:0,startWorkDay:1,shift:0,days:31
        },
        August:{
            count:0,startWorkDay:2,shift:3,days:31
        },
        September:{
            count:1,startWorkDay:0,shift:6,days:30
        },
        October:{
            count:0,startWorkDay:1,shift:1,days:31
        },
        November:{
            count:0,startWorkDay:2,shift:4,days:30
        },
        December:{
            count:0,startWorkDay:0,shift:6,days:31
        },
    },   
]
let date = new Date();
const calendar = document.querySelector('.calendar');
const nameMonth = document.querySelector('.month-text');
const year = document.querySelector('.year-text');
const daysWeek = document.querySelector('.days-grid');
const btnMoveMonthToLeft = document.querySelector('.img-arrow-left');
const btnMoveMonthToRigth = document.querySelector('.img-arrow-right');
const selectBrigade = document.querySelector('.select');

let currentMonth = arrMonths[date.getMonth()];
let currentMonthIndex= date.getMonth();
let currentMonthRu = arrMonthRu[date.getMonth()];
let currentDay=date.getDate()-1;

nameMonth.textContent = currentMonthRu;
year.textContent = date.getFullYear();


let indexSelect=1;
let count=brigade[indexSelect][currentMonth].count;
let startWorkDay=brigade[indexSelect][currentMonth].startWorkDay;
let shift=brigade[indexSelect][currentMonth].shift;
let days=brigade[indexSelect][currentMonth].days;

for(let i=0; i<4; i++){
    brigade[i][currentMonth].flagCurrentDay=true;
}


getBrigadeDate(count,startWorkDay,shift,days);

btnMoveMonthToLeft.addEventListener('click',()=>{
    currentMonthIndex===0?false:currentMonthIndex--;
    getSelectedMonth();
    console.log(currentMonth);
    getBrigadeDate(count,startWorkDay,shift,days);
});

btnMoveMonthToRigth.addEventListener('click',()=>{
    currentMonthIndex>10?false:currentMonthIndex++;
    getSelectedMonth();
    getBrigadeDate(count,startWorkDay,shift,days)
});

function getSelectedMonth(){
    currentMonth = arrMonths[currentMonthIndex]
    nameMonth.textContent=arrMonthRu[currentMonthIndex];
    count = brigade[indexSelect][currentMonth].count;
    startWorkDay = brigade[indexSelect][currentMonth].startWorkDay;
    shift = brigade[indexSelect][currentMonth].shift;
    days = brigade[indexSelect][currentMonth].days;
}

function getBrigadeDate(count,startWorkDay,shift,days){ 
    daysWeek.innerHTML='';
    for(let i=0; i<shift; i++){
        let empty = document.createElement('div');
        empty.classList.add('item');
        empty.style.border = '0 solid black';
        daysWeek.append(empty);
    }
    for(let i=0; i<days; i++){
        let number = document.createElement('div');
        number.classList.add('item','node');
        number.textContent=i+1;
        if(i===currentDay&&brigade[indexSelect][currentMonth].flagCurrentDay) number.style.backgroundColor='pink';
        daysWeek.append(number);
    }

    const node = document.querySelectorAll('.node');
    let accum = 0;
    
    for(let i=startWorkDay; i<node.length; i++){
        if(count<2){
            if(count===0){
                let img = document.createElement('img');
                img.src = './img/sun.svg';
                node[i].append(img);
                let morning = document.createElement('div')
                morning.classList.add('morning-block');
                morning.textContent='08:00';
                node[i].append(morning); 
            }
            else{
                let img = document.createElement('img');
                img.src = './img/moon.svg'
                node[i].append(img);
                let night = document.createElement('div')
                night.classList.add('night-block');
                night.textContent='20:00'
                node[i].append(night); 
            }
            accum++;
            count++;
        }
        else{ 
            i++
            count=0;     
        }
    }
}

selectBrigade.addEventListener('change',(e)=>{
    indexSelect = +e.target.value;
    count = brigade[indexSelect][currentMonth].count;
    startWorkDay = brigade[indexSelect][currentMonth].startWorkDay;
    shift = brigade[indexSelect][currentMonth].shift;
    days = brigade[indexSelect][currentMonth].days;
    getBrigadeDate(count,startWorkDay,shift,days)
});




