// Mapbox geocoder initialization

mapboxgl.accessToken = 'pk.eyJ1IjoidGhpZWZ1bm55IiwiYSI6ImNraWl4Zjl4eDI5dDUycm81Z3JpdXh3bzgifQ.7C-6wjgHn76s7D0F1Q9dxg';

export const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'country,region,place,postcode,locality,neighborhood,address,poi',
    placeholder: 'Enter location to load a picture'
});