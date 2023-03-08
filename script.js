// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo, myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()

   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
   }).then(function () {


       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let i = pickPlanet(listedPlanets)
        console.log(i)
        let target = document.getElementById("missionTarget")
        console.log(target)
        addDestinationInfo(target,listedPlanets[i].name, listedPlanets[i].diameter, listedPlanets[i].star, listedPlanets[i].distance, listedPlanets[i].moons, listedPlanets[i].image)
    })
    let launchform = document.querySelector("form")

    launchform.addEventListener("submit", function(event) {
    
    
        console.log(typeof pilotInput)
        if(typeof pilotInput === "undefined"){
            alert("All fields required")
    
        }
        event.preventDefault();
    })
});