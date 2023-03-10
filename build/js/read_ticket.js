const scanner = new Html5QrcodeScanner('reader', { 
    // Scanner will be initialized in DOM inside element with id of 'reader'
    qrbox: {
        width: 150,
        height: 150,
    },  // Sets dimensions of scanning box (set relative to reader element width)
    fps: 10, // Frames per second to attempt a scan
});

console.log(scanner);

scanner.render(success, error);
// Starts scanner

function success(result) {

    document.getElementById('result').innerHTML = `
    <h2>Success!</h2>
    <p><a href="${result}">${result}</a></p>
    `;
    // Prints result as a link inside result element

    scanner.clear();
    // Clears scanning instance

    document.getElementById('reader').remove();
    // Removes reader element from DOM since no longer needed

}

function error(err) {
    console.error(err);
    // Prints any errors to the console
}