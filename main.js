const TOKEN = "6083320685085962";
const BASE_URL = "https://superheroapi.com/api.php";

window.onload = function() {
    this.showHero(getRandomNumber());
}

function getRandomNumber() {
    return Math.floor(Math.random() * 731) + 1;
}

function showHero(id) {
    var url = BASE_URL + "/" + TOKEN + "/" + id;

    callAPI(url, function(status, data) {
        let name = data.name;
        let intelligence = data.powerstats.intelligence;
        let strength = data.powerstats.strength;
        let speed = data.powerstats.speed;
        let durability = data.powerstats.durability;
        let power = data.powerstats.power;
        let combat = data.powerstats.combat;
        let image = data.image.url;
        console.log(image);
        // Para colocar no HTML:
        document.getElementById("content").innerHTML += "<article> <img src='" + image + "'/>" +
        "<h1>" + name + "</h1>" + 
        "<p>Inteligência: <span style='width:" + intelligence + "%; background-color: yellow'></span></p>" + 
        "<p>Força: <span style='width:" + strength + "%; background-color: red'></span></p>" + 
        "<p>Velocidade: <span style='width:" + speed + "%; background-color: green'></span></p>" + 
        "<p>Durabilidade: <span style='width:" + durability + "%; background-color: blue'></span></p>" + 
        "<p>Poder: <span style='width:" + power + "%; background-color: purple'></span></p>" + 
        "<p>Combate: <span style='width:" + combat + "%; background-color: orange'></span></p>" + 
        "</article>";
    });

}

function callAPI(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            callback(xhr.status, xhr.response);
        } else {
            alert("Houve um problema ao conectar com o servidor");
        }
    }
    xhr.send();
}