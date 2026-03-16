// script.js
// Function to get the current date and time in UTC
function getCurrentDateTime() {
    const date = new Date();
    return date.toISOString().replace('T', ' ').substring(0, 19);
}

console.log('Current Date and Time (UTC):', getCurrentDateTime());