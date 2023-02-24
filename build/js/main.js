const main_container = document.getElementById('main_container');
let items;
window.onload = ()=>{
    items = getAllEvents();
    displayEvents(main_container,items);
}


function getAllEvents()
{
    let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        if(keys[i]!='counter')
        {
            values.push( JSON.parse(localStorage.getItem(keys[i]) ) );
        }
        
    }

    return values;
}

function displayEvents(container,events)
{
    for(let i=0;i<events.length;i++)
    {
        const card = document.createElement('div');
        card.classList.add('card');
        const card_title = document.createElement('p');
        card_title.textContent = events[i].name;
        card.appendChild(card_title);
        container.appendChild(card);
    }
}