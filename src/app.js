const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';

    // Instead of forloop use Map method
    // Code here
    detailedPlayers=players.map((a,b) => {
        return{
            name: a,
            strength: getRandomStrength(),
            img: `images/super-${b+1}.png`,
            type: b%2==0 ? "hero" : "villain"
        }
    })


    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    fragment=players.filter((c,d) => {
         return c.type == type;
    })
    fragment=fragment.map((c,d) => {
        return `<div class="player">
            <img src="${c.img}">
            <div class="name">${c.name}</div>
            <div class="strength">${c.strength}</div>
        </div>`
    })
    

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}