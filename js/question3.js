var getGameDetails = fetch("https://api.rawg.io/api/games/4200")
    .then(response => {
        return response.json()
    })
    .then(json => {
        console.log(json);
        createGameDetails(json);
    })
    .catch(error => {
        console.log("Error: ", error);
    });


let createGameDetails = (gameJson) => {
    let gameDetailContainer = document.querySelector(".container");
    let gameName = gameDetailContainer.querySelector("h1");
    let gameImage = gameDetailContainer.querySelector(".image");
    let gameDescription = gameDetailContainer.querySelector(".description");

    gameName.innerHTML = gameJson.name;
    gameImage.style.backgroundImage = `url('${gameJson.background_image}')`;
    gameDescription.innerHTML = gameJson.description;
}