import {buttonEl} from './app.js'
import {nasaImageContainerEl} from './app.js'

const preloaderContainerEl = document.querySelector(".preloader-container");
const postloaderContainerEl = document.querySelector(".postloader-container");
const errorContainerEl = document.querySelector(".error-container");

export const preloader = {
    on() {
        preloaderContainerEl.innerHTML = `
        <p>Loading big image from NASA</p>
        <img class="preloader-img" src="img/preloader-arrow.svg" alt="Rotating arrow">
        `

        preloaderContainerEl.classList.remove("hidden");
        errorContainerEl.classList.add("hidden");
        postloaderContainerEl.classList.add("hidden");
        buttonEl.classList.add("hidden");
        nasaImageContainerEl.classList.remove("hidden");
    },

    off() {
        postloaderContainerEl.innerHTML = `
        <p class="postloader-info">Image loaded</p>
        <p>If you can't see it, please scroll down, the image may be partially transparent</p>
        `
        errorContainerEl.classList.add("hidden");
        preloaderContainerEl.classList.add("hidden");
        postloaderContainerEl.classList.remove("hidden");
        buttonEl.classList.remove("hidden");
        nasaImageContainerEl.classList.remove("hidden");

    },

    error() {
        errorContainerEl.innerHTML = `
        <p class="error-info">Image not available on NASA servers.</p>
        <p>Try another location.</p>
        `
        postloaderContainerEl.classList.add("hidden");
        preloaderContainerEl.classList.add("hidden");
        errorContainerEl.classList.remove("hidden");
        buttonEl.classList.add("hidden");
        nasaImageContainerEl.classList.add("hidden");
    },

}