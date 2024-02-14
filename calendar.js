import {brigade} from './brigade.js'

const arrMonths =  ['January','February','March','April','May','June','Jule','August','September','October','November','December'];
const arrMonthRu = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];

const nameMonth = document.querySelector('.month-text');
const year = document.querySelector('.year-text');
const daysWeek = document.querySelector('.days-grid');
const btnMoveMonthToLeft = document.querySelector('.img-arrow-left');
const btnMoveMonthToRigth = document.querySelector('.img-arrow-right');
const selectBrigade = document.querySelector('.select');

const emptyCell = document.querySelector('.emptyCell')
const weekendCell = document.querySelector('.weekendCell');
const morningCell = document.querySelector('.morningCell');
const nightCell = document.querySelector('.nightCell');

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
    const dayShift=date.getDay()===0?6:date.getDay()-1; //проверка на сентябрь и декабрь месяц т.к они начинаются с воскресенья.
    daysWeek.innerHTML='';
    for(let i=0; i<dayShift; i++){
        const emptyCellClone = emptyCell.cloneNode(false);
        daysWeek.append(emptyCellClone);
    }
    for(let i=1; i<=days; i++){
        const weekendCellClone = weekendCell.cloneNode(true);
        weekendCellClone.querySelector('.number').textContent = i;
        if(i===highlightingToday&&brigade[indexSelect][currentMonth].highlightingToday) weekendCellClone.classList.add('highlightingToday');
        daysWeek.append(weekendCellClone);
    }

    const node = document.querySelectorAll('.node');
    let accum = 0; 
    
    for(let i=startWorkDay; i<node.length; i++){
        if(count<2){
            if(count===0){
                const morningCellClone=morningCell.cloneNode(true);
                morningCellClone.querySelector('.number').textContent = i+1;
                node[i].textContent = ''; 
                node[i].append(morningCellClone);
            }
            else{
                const nightCellClone=nightCell.cloneNode(true);
                nightCellClone.querySelector('.number').textContent = i+1;
                node[i].textContent = '';
                node[i].append(nightCellClone);
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







