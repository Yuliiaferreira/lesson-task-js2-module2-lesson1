const games = [
    { id: 324, name: "Great game", rating: 5.0 },
    { id: 124, name: "Ok game", rating: 3.0 },
    { id: 678, name: "Meh game", rating: 2.5 },
    { id: 28, name: "Terrible game", rating: 1.0 },
    { id: 4, name: "Mediocre game", rating: 3.0 },
];

const container = document.querySelector(".games-container");

let html = "";

for(let i = 0; i < games.length; i++) {
   html += `<h4 class="name">Name: ${games[i].name}</h4>
                        <p>Rating: ${games[i].rating}</p>`; 
}

container.innerHTML = html;

const names = document.querySelectorAll(".name");

names.forEach (function(name) {
    name.addEventListener("click", clickHappened)
});

function clickHappened(event) {
    event.target.classList.toggle("played");
}