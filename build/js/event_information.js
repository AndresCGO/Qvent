const gen_tickets_number = document.getElementById('gen_tickets_number');
const read_tickets_number = document.getElementById('read_tickets_number');
const event_name = document.getElementById('event_name');
let current_event;

function getCurrentEvent()
{
    return JSON.parse(localStorage.getItem('currentEvent'));
}

function getCurrentEventInf(currentEvent)
{
    let info = JSON.parse(localStorage.getItem(`event${currentEvent+1}`))
    event_name.textContent = info.name;
}

window.onload = ()=>{
    current_event = getCurrentEvent();
    getCurrentEventInf(current_event);
}
