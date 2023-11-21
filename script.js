var cards = []

import ActionCard from "./ActionCard.js";
import Monster from "./Monster.js";
import StartCard from "./StartCard.js";


var monster = new Monster('slug', 'orange', 'stripped')


console.log(monster.type);
fillCards()

console.log("előtte:");
console.log(cards);

shuffleCards()
console.log("utána");
console.log(cards);

generateFields()

function fillCards() {

    addMonsters()
    addActionCards()
    addStartCards()

    for (let index = 0; index < 3; index++) {
        cards.push('vent')
    }

}

function addMonsters() {
    for (let index = 0; index < 2; index++) {
        cards.push(new Monster('a', 'o', 's'))
    }

    for (let index = 0; index < 2; index++) {
        cards.push(new Monster('a', 'o', 'd'))
    }

    for (let index = 0; index < 2; index++) {
        cards.push(new Monster('a', 'p', 's'))
    }

    for (let index = 0; index < 2; index++) {
        cards.push(new Monster('a', 'p', 'd'))
    }

    for (let index = 0; index < 2; index++) {
        cards.push(new Monster('s', 'o', 's'))
    }

    for (let index = 0; index < 2; index++) {
        cards.push(new Monster('s', 'o', 'd'))
    }

    for (let index = 0; index < 2; index++) {
        cards.push(new Monster('s', 'p', 's'))
    }

    for (let index = 0; index < 2; index++) {
        cards.push(new Monster('s', 'p', 'd'))
    }
}

function addActionCards() {
    cards.push(new ActionCard('type'))
    cards.push(new ActionCard('color'))
    cards.push(new ActionCard('pattern'))
}

function addStartCards() {

    cards.push(new StartCard('blue'))

    cards.push(new StartCard('red'))

    cards.push(new StartCard('yellow'))
}

function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

function generateFields() {
    let divs = ''
    for (let index = 0; index < cards.length; index++) {
        if (cards[index] == 'vent') {
            divs += `<div class='card'><p>${cards[index]}</p></div>`
        } else {
            divs += `<div class='card'><p>${cards[index].type}</p></div>`
        }

    }
    document.getElementById("table").innerHTML = divs
}