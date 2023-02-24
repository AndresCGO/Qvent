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

console.log(getAllEvents());