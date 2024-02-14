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
let highlightingToday=date.getDate();

nameMonth.textContent = currentMonthRu;
year.textContent = currenFullYear;

date = new Date(currenFullYear,currentMonthIndex,1) 
let indexSelect=1;
for(let i=0; i<4; i++){
    brigade[i][currentMonth].highlightingToday=true; //пуш флага для подсвечивания сегодняшнего дня; 
}

getBrigadeDate();

function getBrigadeDate(){
    let count=brigade[indexSelect][currentMonth].count;
    const startWorkDay=brigade[indexSelect][currentMonth].startWorkDay;
    const days = new Date(currenFullYear,currentMonthIndex+1,0).getDate();
    const dayShift=date.getDay()-1===-1?6:date.getDay()-1; //проверка на сентябрь и декабрь месяц т.к они начинаются с воскресенья.
    daysWeek.innerHTML='';
    for(let i=0; i<dayShift; i++){
        let empty = document.createElement('div');
        empty.classList.add('item');
        empty.style.border = '0 solid black';
        daysWeek.append(empty);
    }
    for(let i=1; i<=days; i++){
        let number = document.createElement('div');
        number.classList.add('item','node');
        number.textContent = i;
        let block = document.createElement('div');
        let img = document.createElement('img');
        img.src = './img/house.svg';
        block.classList.add('weekend-block');
        block.textContent='Вых...'
        if(i===highlightingToday&&brigade[indexSelect][currentMonth].highlightingToday) number.classList.add('highlightingToday');
        number.append(img,block);
        daysWeek.append(number);
    }

    const node = document.querySelectorAll('.node');
    let accum = 0; // счетчик, всего к-во смен за выбраный месяц (не используется).
    
    for(let i=startWorkDay; i<node.length; i++){
        if(count<2){
            let block = document.createElement('div')
            if(count===0){
                node[i].textContent = i+1;
                let img = document.createElement('img');
                img.src = './img/sun.svg';
                node[i].append(img);
                block.classList.add('morning-block');
                block.textContent='8:00';
                node[i].append(block); 
            }
            else{
                node[i].textContent = i+1;
                let img = document.createElement('img');
                img.src = './img/moon.svg'
                node[i].append(img);
                block.classList.add('night-block');
                block.textContent='20:00'
                node[i].append(block); 
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
    date = new Date(currenFullYear,currentMonthIndex,1)
    getBrigadeDate()
});

btnMoveMonthToLeft.addEventListener('click',()=>{
    currentMonthIndex===0?false:currentMonthIndex--;
    getSelectedMonth();
    getBrigadeDate();
});

btnMoveMonthToRigth.addEventListener('click',()=>{
    currentMonthIndex>10?false:currentMonthIndex++;
    getSelectedMonth();
    getBrigadeDate();
});

function getSelectedMonth(){
    currentMonth = arrMonths[currentMonthIndex]
    nameMonth.textContent=arrMonthRu[currentMonthIndex];
    date = new Date(currenFullYear,currentMonthIndex,1);
}








