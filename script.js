// Write your JavaScript code here!

//const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function(){
    let document = window.document;
    //element.style.visibility = 'hidden';
    formSubmission(document);


   let listedPlanets;
   
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);

       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       listedPlanets = listedPlanets[pickPlanet()];
       addDestinationInfo(listedPlanets);
    })
  
});