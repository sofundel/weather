export { render, addToAddedLocations }
import { saveLocations } from './operations-with-storage.js';
import { NOW_TAB, ADDED_LOCATIONS } from './constants-html-structure.js';
import { showWeatherInfo } from './show-weather-info.js'
import { showForecastInfo } from './show-forecast-info.js';

async function render(list, cityName) {
    const deletedElementsFromAddedLocations = document.querySelectorAll('.weather-info__added-locations li');
    const deletedElementsFromForecast = document.querySelectorAll('.weather-info__forecast-tab-info li');

    deleteHTMLStructure(deletedElementsFromAddedLocations);
    deleteHTMLStructure(deletedElementsFromForecast);

    for (const item of list) {
        createHTLMStructureForAddedLocation(list, item);
    }

    if (await showWeatherInfo(cityName) === false) {
        return;
    } else {
        showWeatherInfo(cityName)
        showForecastInfo(cityName);
    }
}

function addToAddedLocations(list, cityName) {
    for (const item of list) {
        if (item === cityName) { return; };
    }

    list.push(cityName);

    saveLocations('addedLocations', list);

    const currentCityName = NOW_TAB.CITY.textContent;
    render(list, currentCityName);
}

function deleteLocation(list, cityName) {
    const index = list.findIndex(item => item === cityName);
    list.splice(index, 1);

    saveLocations('addedLocations', list);

    const currentCityName = NOW_TAB.CITY.textContent;
    render(list, currentCityName);
}

function createHTLMStructureForAddedLocation(list, cityName) {
    const location = document.createElement('li');
    ADDED_LOCATIONS.appendChild(location);

    const locationName = document.createElement('label');
    location.appendChild(locationName);
    locationName.className = 'weather-info__added-location';

    locationName.addEventListener('click', () => { render(list, cityName)});

    const deleteLocationButton = document.createElement('button');
    location.appendChild(deleteLocationButton);
    deleteLocationButton.className = 'weather-info__delete-location';

    deleteLocationButton.addEventListener('click', () => { deleteLocation(list, cityName) });

    locationName.textContent = cityName;
}

function deleteHTMLStructure(deletedElements) {
    deletedElements.forEach(function (elem) {
        elem.parentNode.removeChild(elem);
    });
}