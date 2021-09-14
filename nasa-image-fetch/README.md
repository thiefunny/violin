# NASA image fetch project 

## About
Displaying a satellite image fetched from NASA’s API for a location selected by the user.

## Project live on Github Pages
Github Pages: https://walanus.com/nasa-image-fetch/

## Technologies
* APIs used: Mapbox (geocoder), Google Maps Embed, NASA (Earth Imagery endpoint)
* Project written in plain HTML5, CSS3 and Vanilla JS ES6.
* npm, webpack, normalize.css or any libraries are intentionally not used - in my opinion project is too small for loading such data.

## Other notes
* Google Maps zoom is matched to NASA image zoom, so it is nice to compare both map and photo
* CSS are split to few files, in bigger project I would use SASS and split SASS files, then merge them into one main.css.
* I used VCS to write a code.
* Website is responsive.
* Check Github Issues for some insight regarding creation of the project.

## Warning
* Secrets are exposed - I know they should be in the backend.

## Setup
* No setup needed to run, just copy files to your server or folder on desktop and run index.html