const create_event_btn = document.getElementById('create_event_btn');
const event_name = document.getElementById('event_name');
const event_date = document.getElementById('event_date');
let counter;


class Event{
    id;
    name;
    date;
    tickets;

    constructor(name,date)
    {
        this.name = name;
        this.date = date;
        this.id = counter;
        counter+=1;
    }
}

create_event_btn.addEventListener('click',()=>{
    console.log(event_date.value);
});


function Counter()
{
    if(getCounter()==null || checkStorage()==undefined)
    {
        setCounter(0);
    }
    else
    {
        counter = getCounter()
    }
}

function setCounter(value)
{
    localStorage.setItem('counter',value);
}

function getCounter()
{
    return localStorage.getItem('counter');
}

function createEvent(name,date)
{
    if(name!='' && date!='')
    {
        
    }
}
