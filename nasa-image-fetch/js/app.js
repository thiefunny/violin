import {
    preloader
} from './preloader.js'

import {
    geocoder
} from './geocoder.js'

// Caching DOM

export const nasaImageContainerEl = document.querySelector(".nasa-image-container");
const googleEmbedEl = document.querySelector(".google-embed-iframe");
// const googleEmbedEl = document.querySelector(".google-embed-container");
const taglineEl = document.querySelector(".app-tagline");
export const buttonEl = document.querySelector(".button");
const nasaEndpoint = 'https://api.nasa.gov/planetary/earth/imagery?'
const token = '&api_key=N48XRwWlGEr15IRdacow3bXBeDJM5OkhcZ92w8X0'
const googleMapsEndpoint = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyBsh24-LzvzGumJN2NaX0gYAQqzstGPeZs&center='
const googleMapsURLZoom = '&zoom=11'

geocoder.addTo('#geocoder');

// Mapbox geocoder autocomplete 

geocoder.on('result', e => {

    const location = e.result.place_name;

    preloader.on();


    // Printing current location

    taglineEl.innerText = `Current location: ${location}`;
    taglineEl.style.fontSize = '1rem';


    // Loading image from NASA servers

    const nasaImageAddress = `${nasaEndpoint}lon=${e.result.center[0]}&lat=${e.result.center[1]}&dim=0.3${token}`

    nasaImageContainerEl.innerHTML = `  
    <img class="nasa-image" src="${nasaImageAddress}" alt="The newest picture of ${location} taken by Landsat 8 satellite">
    `

    const imgEl = document.querySelector('.nasa-image');

    imgEl.addEventListener('load', _ => {
        preloader.off();
    });

    imgEl.addEventListener('error', _ => {
        preloader.error();
    })

    // Button opening full image in a new window

    buttonEl.addEventListener('click', _ => {
        window.open(`${nasaImageAddress}`, true)
    })

    // Loading Google Maps Embed

    googleEmbedEl.setAttribute("src", `${googleMapsEndpoint}${e.result.center[1]},${e.result.center[0]}${googleMapsURLZoom}`)

    // Clear geocoder input

    geocoder.clear()

})