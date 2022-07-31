// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const mission = document.getElementById("missionTarget");
   mission.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json.name}</li>
                    <li>Diameter: ${json.diameter}</li>
                    <li>Star: ${json.star}</li>
                    <li>Distance from Earth: ${json.distance}</li>
                    <li>Number of Moons: ${json.moons}</li>
                </ol>
                <img src="${json.image}">
    `;
};


function validateInput(testInput) {
   if (testInput === '') {
    return 'Empty';
   } else if (isNaN(testInput)){
    return 'Not a Number';
   } else if (!isNaN(testInput)) {
    return 'Is a Number';
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let form = document.querySelector("form[data-testid=testForm]");
    form.addEventListener("submit", function(event) {
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel");
        let cargoMassInput = document.querySelector("input[name=cargoMass");
        let changePilot = document.getElementById("pilotStatus");
        let changeCopilot = document.getElementById("copilotStatus");
        let changeFuelLevel = document.getElementById("fuelStatus");
        let changeCargoLevel = document.getElementById("cargoStatus");
        let changeFaultyItems = document.getElementById("faultyItems");
        let statusOfLaunch = document.getElementById("launchStatus");
        event.preventDefault();
            if (pilotNameInput.value === '' || copilotNameInput.value === '' || fuelLevelInput.value === '' || cargoMassInput.value === ''){
            alert('All fields required.');
            event.preventDefault();
            } else if (validateInput(pilotNameInput.value) === 'Empty' || validateInput(pilotNameInput.value)==='Is a Number') {
                alert("Please use letters only for the Pilot's name");
                event.preventDefault();
            } else if (validateInput(copilotNameInput.value) === 'Empty' || validateInput(copilotNameInput.value) === 'Is a Number'){
                alert("Please use letters only for the Co-pilot's name");
                event.preventDefault();
            } else if (validateInput(fuelLevelInput.value) === 'Empty' || validateInput(fuelLevelInput.value) === 'Not a Number'){
                alert("Please use numbers only for the Fuel Level");
                event.preventDefault();
            } else if (validateInput(cargoMassInput.value) === 'Empty' || validateInput(cargoMassInput.value) === 'Not a Number'){
                alert("Please use numbers only for the Cargo Level");
                event.preventDefault();
            } else {
                changePilot.innerHTML = `${pilotNameInput.value} Ready`;
                changeCopilot.innerHTML = `${copilotNameInput.value} Ready`;
                changeFaultyItems.style.visibility = "visible"
                if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
                    changeFuelLevel.innerHTML = 'Not enough fuel for the journey.';
                    changeCargoLevel.innerHTML = 'Too much mass for the shuttle to take off';
                    statusOfLaunch.innerHTML = 'Shuttle not ready for launch';
                    statusOfLaunch.style.color = "red";
                } else if (fuelLevelInput.value < 10000) {
                    changeFuelLevel.innerHTML = 'Not enough fuel for the journey.';
                    statusOfLaunch.innerHTML = 'Shuttle not ready for launch';
                    statusOfLaunch.style.color = "red";
                    if (cargoMassInput.value > 10000) {
                        changeCargoLevel.innerHTML = 'Too much mass for the shuttle to take off';
                        statusOfLaunch.innerHTML = 'Shuttle not ready for launch';
                        statusOfLaunch.style.color = "red";
                    }
                } else if (cargoMassInput.value > 10000) {
                    changeCargoLevel.innerHTML = 'Too much mass for the shuttle to take off';
                    statusOfLaunch.innerHTML = 'Shuttle not ready for launch';
                    statusOfLaunch.style.color = "red";
                } else {
                    changeFaultyItems.style.visibility = "hidden"
                    statusOfLaunch.innerHTML = 'Shuttle is ready for launch';
                    statusOfLaunch.style.color = "green";
                }
            }
    });
    //Make sure to call your formSubmission() function at the appropriate time in your script.js file!
}

async function myFetch() {
    // add URL and return response.json()
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    planets = Math.floor(Math.random() * 6);
    return planets;
}

//module.exports.addDestinationInfo = addDestinationInfo;
//module.exports.validateInput = validateInput;
//module.exports.formSubmission = formSubmission;
//module.exports.pickPlanet = pickPlanet; 
//module.exports.myFetch = myFetch;
