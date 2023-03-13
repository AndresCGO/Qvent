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
        const card = document.createElement('div');
        card.classList.add('card');
        const date = document.createElement('label');
        date.textContent = "Fecha y hora";
        date.classList.add('date');
        card.appendChild(date)
        const options = document.createElement('img');
        options.src = 'img/options.png';
        options.setAttribute('style','-o-object-fit: scale-down; object-fit: scale-down; position: absolute; right: 1.25rem;');
        card.appendChild(options)
        const qr_image = document.createElement('img');
        qr_image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + tickets[i];
        qr_image.setAttribute('style', 'width: 10rem; height: auto; border-radius: 0.5rem;');
        card.appendChild(qr_image)
        const code = document.createElement('label');
        code.textContent = "xxxx-xxxx-xxxx";
        code.classList.add('code');
        card.appendChild(code)
        const share = document.createElement('img');
        share.src = 'img/compartir.png';
        share.classList.add('imgshare');
        card.appendChild(share)
        main_container.appendChild(card);
    }
}