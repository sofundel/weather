export { SEARCH_FORM, ADDED_LOCATIONS, NOW_TAB, DETAILS_TAB, FORECAST_TAB }

const SEARCH_FORM = {
    FORM: document.querySelector('#searchForm'),
    BUTTON: document.querySelector('#searchButton'),
    INPUT_TEXT: document.querySelector('#inputText'),
}

const ADDED_LOCATIONS = document.querySelector('#addedLocations');

const NOW_TAB = {
    CITY: document.querySelector('#nowTabCity'),
    TEMPERATURE: document.querySelector('#nowTabTemperature'),
    WEATHER: document.querySelector('#nowTabWeather'),
    FAVORITE_BUTTON: document.querySelector('#nowTabFavoriteButton')
}

const DETAILS_TAB = {
    CITY: document.querySelector('#detailsTabCity'),
    TEMPERATURE: document.querySelector('#detailsTabTemperature'),
    FEELS: document.querySelector('#detailsTabFeels'),
    WEATHER: document.querySelector('#detailsTabWeather'),
    SUNRISE: document.querySelector('#detailsTabSunrise'),
    SUNSET: document.querySelector('#detailsTabSunset'),
}

const FORECAST_TAB = {
    CITY: document.querySelector('#forecastTabCity'),
    INFO_BLOCKS: document.querySelector('#forecastTabInfoBlocks'),
}