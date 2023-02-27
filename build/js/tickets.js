const ticket_number = document.getElementById('ticket_number');
const generate_ticket = document.getElementById('generate_ticket');
let current_event;


function getCurrentEvent()
{
    return JSON.parse(localStorage.getItem('currentEvent'));
}

function pushTickets(currentEvent,value)
{
    let event = getEvent(currentEvent);
    let tickets = fillTickets(value);
    event.tickets = tickets;
    setEvent(currentEvent,event);
}

window.onload = ()=>
{
    current_event = getCurrentEvent();
}

generate_ticket.addEventListener('click',()=>{
    pushTickets(current_event,ticket_number.value);
})


function getEvent(currentEvent)
{
    return JSON.parse(localStorage.getItem(`event${currentEvent+1}`));
}

function fillTickets(value)
{   
    let tickets = [];

    for(let i=0;i<value;i++)
    {
        tickets.push(i);
    }
    
    return tickets;
}

function setEvent(eventId,event)
{
    localStorage.setItem(`event${eventId+1}`,JSON.stringify(event));
}
