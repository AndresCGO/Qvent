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

async function getQrCodes(tickets)
{
    for(let i=0;i<tickets.length;i++)
    {

        const card = document.createElement('div');
        card.classList.add('card');
        const qr_image = await getQRImage(tickets[i]);
        card.appendChild(qr_image);    
        const date = document.createElement('label');
        date.textContent = new Date().toLocaleDateString();
        date.classList.add('date');
        card.appendChild(date)
        const options = document.createElement('img');
        options.src = 'img/options.png';
        options.setAttribute('style','-o-object-fit: scale-down; object-fit: scale-down; position: absolute; right: 1.25rem;');
        card.appendChild(options);
        const code = document.createElement('label');
        code.textContent = `${i+1}`;
        code.classList.add('code');
        card.appendChild(code);
        const share = document.createElement('img');
        share.src = 'img/compartir.png';
        share.setAttribute('style', 'width: 2rem; height: auto; display: block; margin-right: auto; margin-left: auto;');
        share.classList.add('imgshare');
        card.appendChild(share);
        share.addEventListener('click',()=>
        {
            if(navigator.share)
            {
                navigator.share(qr_image).then(()=>
                {
                    alert('QR compartido con exito');
                }).catch(console.error);
            }
        });
        main_container.appendChild(card);
    }
}

function getQRImage(value)
{
    const qr_image = document.createElement('img');
    qr_image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + value;
    qr_image.setAttribute('style', 'width: 10rem; height: auto; border-radius: 0.5rem;');
    return qr_image;
}


/*share.addEventListener('click',()=>
{
    if(navigator.share)
    {
        navigator.share(qr_image).then(()=>
        {
            alert('QR compartido con exito');
        }).catch(console.error);
    }
});*/

