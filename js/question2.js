var getGames = fetch("https://api.rawg.io/api/games")
    .then(response => {
        return response.json()
    })
    .then(json => {
        console.log(json.results);
        createGames(json.results);
    })
    .catch(error => {
        console.log("Error: ", error);
    });

var resultDiv = document.querySelector(".results");

var createGames = (gameJson) => {
    gameJson.forEach(game => {
        var newHTML = `<div class="game"><h2>${game.name}</h2><img src="${game.background_image}" alt="${game.name}"></div>`;
        resultDiv.innerHTML += newHTML;
    })
    
}