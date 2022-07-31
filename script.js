// Write your JavaScript code here!

//const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function(){
    let document = window.document;
    formSubmission(document);


   let listedPlanet;
   
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanet = result;
   }).then(function () {

       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       listedPlanet = listedPlanet[pickPlanet()];
       console.log(listedPlanet.image);
       addDestinationInfo(document, listedPlanet.name, listedPlanet.diameter, listedPlanet.star, listedPlanet.distance, listedPlanet.moons, listedPlanet.image)
    })
  
});