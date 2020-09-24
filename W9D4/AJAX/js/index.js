console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b",
    success(weatherData) {
        console.log('Here is the fetched weather:');
        console.log(weatherData);
    },
    error() {
        console.log('Error, unable to fetch weather')
    }
})

// Add another console log here, outside your AJAX request

console.log('DID IT WORK?')

