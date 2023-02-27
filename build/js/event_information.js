const gen_tickets_number = document.getElementById('gen_tickets_number');
const read_tickets_number = document.getElementById('read_tickets_number');
const event_name = document.getElementById('event_name');
const generate_tickets = document.getElementById('generate_tickets');
let current_event;

function getCurrentEvent()
{
    return JSON.parse(localStorage.getItem('currentEvent'));
}

function getCurrentEventInf(currentEvent)
{
    let info = JSON.parse(localStorage.getItem(`event${currentEvent+1}`))
    event_name.textContent = info.name;
    gen_tickets_number.textContent = info.tickets.length;
}

window.onload = ()=>{
    current_event = getCurrentEvent();
    getCurrentEventInf(current_event);
    generate_tickets.addEventListener('click',()=>{
        window.location.href = "../build/generate_ticket.html";
    });
}


