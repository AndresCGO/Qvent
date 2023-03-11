let currentEvent = getCurrentEvent();
let eventInfo = getCurrentEventInfo(currentEvent);
let eventTickets = eventInfo.tickets;
const read_correctly_PopUp = document.getElementById('read_correctly_PopUp');
const close_read_correctly_PopUp_btn = document.getElementById('close_read_correctly_PopUp_btn');
const failed_read_PopUp = document.getElementById('failed_read_PopUp');
const close_error_PopUp_btn = document.getElementById('close_error_PopUp_btn');


close_read_correctly_PopUp_btn.addEventListener('click',()=>
{
    read_correctly_PopUp.close();
    window.parent.location = window.parent.location.href;
});

close_error_PopUp_btn.addEventListener('click',()=>
{
    failed_read_PopUp.close();
    window.parent.location = window.parent.location.href;
});


const scanner = new Html5QrcodeScanner('reader', { 
    // Scanner will be initialized in DOM inside element with id of 'reader'
    qrbox: {
        width: 250,
        height: 250,
    },  // Sets dimensions of scanning box (set relative to reader element width)
    fps: 10, // Frames per second to attempt a scan
});

scanner.render(success, error);
// Starts scanner

function success(result) {
    // Removes reader element from DOM since no longer needed
    let index = eventTickets.indexOf(result);
    if (index > -1) { // only splice array when item is found
        eventTickets.splice(index, 1); // 2nd parameter means remove one item only
        eventInfo.tickets = eventTickets;
        updateEvent(eventInfo,currentEvent);
        scanner.clear();
        read_correctly_PopUp.showModal();
        //document.getElementById('reader').remove();
    }
    else
    {
        scanner.clear();
        failed_read_PopUp.showModal();
    // Clears scanning instance
    }

    console.log(eventTickets);
    


}

function error(err) {
    //console.error(err);
    // Prints any errors to the console
}

function getCurrentEvent()
{
    return JSON.parse(localStorage.getItem('currentEvent'));
}

function getCurrentEventInfo(currentEvent)
{
    return JSON.parse(localStorage.getItem(`event${currentEvent+1}`))
}

function updateEvent(eventInf,currentEvent)
{
    localStorage.setItem(`event${currentEvent+1}`, JSON.stringify(eventInf));
}

/* function setEvent(Event)
{
    localStorage.setItem(`event${counter}`,JSON.stringify(Event));
} */