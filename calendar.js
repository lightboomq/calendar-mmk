import {brigade} from './brigade.js'

const arrMonths =  ['January','February','March','April','May','June','Jule','August','September','October','November','December'];
const arrMonthRu = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];

const nameMonth = document.querySelector('.month-text');
const year = document.querySelector('.year-text');
const daysWeek = document.querySelector('.days-grid');
const btnMoveMonthToLeft = document.querySelector('.img-arrow-left');
const btnMoveMonthToRigth = document.querySelector('.img-arrow-right');
const selectBrigade = document.querySelector('.select');

let date = new Date();

let currenFullYear  = date.getFullYear();
let currentMonth = arrMonths[date.getMonth()];
let currentMonthIndex= date.getMonth();
let currentMonthRu = arrMonthRu[date.getMonth()];
let highlightingToday=date.getDate()-1;

nameMonth.textContent = currentMonthRu;
year.textContent = date.getFullYear();

let indexSelect=1;
let count=brigade[indexSelect][currentMonth].count;
let startWorkDay=brigade[indexSelect][currentMonth].startWorkDay;
let days = new Date(currenFullYear,currentMonthIndex+1,0).getDate();

date = new Date(currenFullYear,currentMonthIndex,1) 

let dayShift = date.getDay()-1;

for(let i=0; i<4; i++){
    brigade[i][currentMonth].highlightingToday=true; //пуш флага для подсвечивания сегодняшнего дня; 
}

getBrigadeDate(count,startWorkDay,dayShift,days);

function getBrigadeDate(count,startWorkDay,dayShift,days){ 
    daysWeek.innerHTML='';
    for(let i=0; i<dayShift; i++){
        let empty = document.createElement('div');
        empty.classList.add('item');
        empty.style.border = '0 solid black';
        daysWeek.append(empty);
    }
    for(let i=0; i<days; i++){
        let number = document.createElement('div');
        number.classList.add('item','node');
        number.textContent=i+1;
        console.log(highlightingToday);
        if(i===highlightingToday&&brigade[indexSelect][currentMonth].highlightingToday) number.classList.add('highlightingToday');
        daysWeek.append(number);
    }

    const node = document.querySelectorAll('.node');
    let accum = 0; // счетчик, к-во смен за выбраный месяц (не используется).
    
    for(let i=startWorkDay; i<node.length; i++){
        if(count<2){
            if(count===0){
                let img = document.createElement('img');
                img.src = './img/sun.svg';
                node[i].append(img);
                let morning = document.createElement('div')
                morning.classList.add('morning-block');
                morning.textContent='8:00';
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
    date = new Date(currenFullYear,currentMonthIndex,1)
    dayShift=date.getDay()-1===-1?6:date.getDay()-1; //проверка на сентябрь и декабрь месяц т.к они начинаются с воскресенья.
    days = new Date(currenFullYear,currentMonthIndex+1,0).getDate();
    getBrigadeDate(count,startWorkDay,dayShift,days)
});

btnMoveMonthToLeft.addEventListener('click',()=>{
    currentMonthIndex===0?false:currentMonthIndex--;
    getSelectedMonth();
    getBrigadeDate(count,startWorkDay,dayShift,days);
});

btnMoveMonthToRigth.addEventListener('click',()=>{
    currentMonthIndex>10?false:currentMonthIndex++;
    getSelectedMonth();
    getBrigadeDate(count,startWorkDay,dayShift,days);
});

function getSelectedMonth(){
    currentMonth = arrMonths[currentMonthIndex]
    nameMonth.textContent=arrMonthRu[currentMonthIndex];
    count = brigade[indexSelect][currentMonth].count;
    startWorkDay = brigade[indexSelect][currentMonth].startWorkDay;
    date = new Date(currenFullYear,currentMonthIndex,1);
    dayShift=date.getDay()-1===-1?6:date.getDay()-1; //проверка на сентябрь и декабрь месяц т.к они начинаются с воскресенья.
    days = new Date(currenFullYear,currentMonthIndex+1,0).getDate();
}








