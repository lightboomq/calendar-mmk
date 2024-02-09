let date = new Date();
const arrMonths = ['January','February','March','April','May','June','Jule','August','September','October','November','December'];
const arrMonthRu = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
let currentMonth = arrMonths[date.getMonth()]
let currentMonthRu = arrMonthRu[date.getMonth()]

let currentDay=date.getDate();

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


const select = document.querySelector('.select');

select.addEventListener('change',(e)=>{
    let index = +e.target.value;
    let count = brigade[index][currentMonth].count;
    let startWorkDay = brigade[index][currentMonth].startWorkDay;
    let shift = brigade[index][currentMonth].shift;
    let days = brigade[index][currentMonth].days;
    
    getBrigadeDate(count,startWorkDay,shift,days)
});

const calendar = document.querySelector('.calendar');
const nameMonth = document.querySelector('.month');
const daysWeek = document.querySelector('.days-grid');

nameMonth.textContent=arrMonthRu[date.getMonth()];

function getBrigadeDate(count,startWorkDay,shift,days){ 
    daysWeek.innerHTML='';
    for(let i=0; i<shift; i++){
        let empty = document.createElement('div');
        empty.classList.add('item');
        daysWeek.append(empty);
    }
    for(let i=0; i<days; i++){
        let number = document.createElement('div');
        number.classList.add('item','node');
        number.textContent=i+1;
        if(i===currentDay-1) number.style.backgroundColor='pink';
        daysWeek.append(number);
    }
    const node = document.querySelectorAll('.node');
    
    let accum = 0;
    
    for(let i=startWorkDay; i<node.length; i++){
        if(count<2){
            if(count===0){
                let img = document.createElement('img');
                img.src = './img/sun.svg'
                node[i].append(img);
                let morning = document.createElement('div')
                morning.classList.add('morning-block');
                morning.textContent='08:00'
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








