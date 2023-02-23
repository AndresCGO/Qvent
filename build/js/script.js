const create_event_btn = document.getElementById('create_event_btn');
const event_name = document.getElementById('event_name');
const event_date = document.getElementById('event_date');
let counter;

window.onload = Counter();

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
        counter = parseInt(counter) + 1;

        
    }
}

create_event_btn.addEventListener('click',()=>{
    createEvent(event_name.value,event_date.value);
});


function Counter()
{
    if(getCounter()==null || getCounter()==undefined)
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
        let event = new Event(name,date);
        setEvent(event);
    }
}


function setEvent(Event)
{
    localStorage.setItem(`event${counter}`,JSON.stringify(Event));
}