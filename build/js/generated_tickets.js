const main_container = document.getElementById('main_container');
let current_event;
let tickets;

function getCurrentEvent()
{
    return JSON.parse(localStorage.getItem('currentEvent'));
}

function getCurrentEventInf(currentEvent)
{
    let info = JSON.parse(localStorage.getItem(`event${currentEvent+1}`))
    tickets = info.tickets;
}

window.onload = ()=>{
    current_event = getCurrentEvent();
    getCurrentEventInf(current_event);
    getQrCodes(tickets);
}

function getQrCodes(tickets)
{
    for(let i=0;i<tickets.length;i++)
    {
        const qr_image = document.createElement('img');
        qr_image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + tickets[i];
        qr_image.setAttribute('style', 'width: 10rem; height: auto;');
        main_container.appendChild(qr_image);
    }
}