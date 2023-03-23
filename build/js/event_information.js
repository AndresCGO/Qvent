const gen_tickets_number = document.getElementById('gen_tickets_number');
const read_tickets_number = document.getElementById('read_tickets_number');
const event_name = document.getElementById('event_name');
const generate_tickets = document.getElementById('generate_tickets');
const available_tickets = document.getElementById('available_tickets');
const read_ticket = document.getElementById('read_ticket');
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
    read_tickets_number.textContent = info.read_tickets;
}

window.onload = ()=>{
    current_event = getCurrentEvent();
    getCurrentEventInf(current_event);
    generate_tickets.addEventListener('click',()=>{
        window.location.href = "../build/generate_ticket.html";
    });
    available_tickets.addEventListener('click',()=>{
        window.location.href = "../build/available_tickets.html";
    });
    read_ticket.addEventListener('click',()=>{
        window.location.href = "../build/read_ticket.html";
    });
}


