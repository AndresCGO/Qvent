const create_event_btn = document.getElementById('create_event_btn');
const event_name = document.getElementById('event_name');
const event_date = document.getElementById('event_date');
const close_create_event_PopUp_btn = document.getElementById('close_create_event_PopUp_btn');
const close_error_PopUp_btn = document.getElementById('close_error_PopUp_btn');
const create_event_PopUp = document.getElementById('create_event_PopUp');
const error_PopUp = document.getElementById('error_PopUp');
let counter;

window.onload = ()=>{
    Counter()
};


class Event{
    id;
    name;
    date;
    tickets;

    constructor(name,date)
    {
        this.name = name;
        this.date = date;
        this.id = parseInt(counter); 
        counter = parseInt(counter) + 1;
        this.tickets = [];
    }
}

create_event_btn.addEventListener('click',()=>{
    createEvent(event_name.value,event_date.value);
    setCounter(parseInt(counter));
    

});

close_create_event_PopUp_btn.addEventListener('click',()=>{
    create_event_PopUp.close();
});

close_error_PopUp_btn.addEventListener('click',()=>{
    error_PopUp.close();
});

/* Initialize the counter or get the counter if it is already initialized */
function Counter()
{
    if(getCounter()==null || getCounter()==undefined)
    {
        setCounter(1);
        counter = getCounter();
    }
    else
    {
        counter = getCounter();
    }
}

/* Set the counter in the localStorage */
function setCounter(value)
{
    localStorage.setItem('counter',JSON.stringify(value));
}

/* get the counter from the localStorage */
function getCounter()
{
    return JSON.parse(localStorage.getItem('counter'));
}


/* create a event with the event class constructor */
function createEvent(name,date)
{
    if(name!='' && date!='')
    {
        let event = new Event(name,date);
        setEvent(event);
        create_event_PopUp.showModal(); 
    }
    else
    {
        error_PopUp.showModal();
    }
}

/* Set the event in the localStorage */
function setEvent(Event)
{
    localStorage.setItem(`event${counter}`,JSON.stringify(Event));
}