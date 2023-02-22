const create_event_btn = document.getElementById('create_event_btn');
const event_name = document.getElementById('event_name');
const event_date = document.getElementById('event_date');

let pass = '0';
console.log(sha256(pass));


class Event{
    static count = 0;
    id;
    name;
    date;
    tickets;

    constructor(name,date)
    {
        this.name = name;
        this.date = date;
    }
}

async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    
    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    return hashHex;
}

sha256('abc').then(hash => console.log(hash));

(async function() {
    const hash = await sha256('abc');
}());