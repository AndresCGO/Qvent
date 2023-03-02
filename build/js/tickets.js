const ticket_number = document.getElementById('ticket_number');
const generate_ticket = document.getElementById('generate_ticket');
const generate_ticket_popUp = document.getElementById('generate_ticket_popUp');
const accept_generate_ticket_PopUp_btn = document.getElementById('accept_generate_ticket_PopUp_btn');
const cancel_generate_ticket_PopUp_btn = document.getElementById('cancel_generate_ticket_PopUp_btn');
const nberTickets = document.getElementById('nberTickets');


let current_event;


function getCurrentEvent()
{
    return JSON.parse(localStorage.getItem('currentEvent'));
}

window.onload = ()=>
{
    current_event = getCurrentEvent();
}


generate_ticket.addEventListener('click',()=>{
    nberTickets.textContent = ticket_number.value;
    generate_ticket_popUp.showModal(); 
})

accept_generate_ticket_PopUp_btn.addEventListener('click',()=>{
    fillTickets(current_event,ticket_number.value);
    generate_ticket_popUp.close();
})

cancel_generate_ticket_PopUp_btn.addEventListener('click',()=>{
    generate_ticket_popUp.close();
})


function getEvent(currentEvent)
{
    return JSON.parse(localStorage.getItem(`event${currentEvent+1}`));
}

function fillTickets(eventId,value)
{   
    let event = getEvent(eventId);
    let tickets = event.tickets;
    let length = parseInt(event.tickets.length) + parseInt(value);

    for(let i=event.tickets.length;i<length;i++)
    {
        tickets.push(crypto.randomUUID());
    }
    
    event.tickets = tickets;
    setEvent(eventId,event);

}

function setEvent(eventId,event)
{
    localStorage.setItem(`event${eventId+1}`,JSON.stringify(event));
}
