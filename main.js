class Characters    {
    constructor(name, health)   {
    this.name = name;
    this.health = health;
    }
}

class Opponents extends Characters {
    constructor(name, health)   {
        super();
        this.name = name;
        this.health = health;
    }
}

let char1 = new Characters("Alex", 50);
let char2 = new Characters("Trogdor", 100);
let char3 = new Characters("Thor", 500);

let opponent = new Opponents("Captain Underpants", 750);
let characters = [char1, char2, char3];


for (let i=0; i < characters.length; i++)  {
    let num = parseInt([i]);
    console.log(`${num}: ${characters[i].name} ~ ${characters[i].health} HP`);
}

let selectChar = prompt(`Select a character. Type: 0, 1, or 2.`);
let userChar = (characters[selectChar]);
// console.log(userChar.name);
let userResponse = window.confirm(`Battle!`);
// console.log(userResponse);

const calcDamage = () =>    {
    let damage = Math.floor(Math.random() * 5) + 1;
    return damage;
}

while(userResponse !== false) {
    let userDamage = calcDamage();
    let opponentDamage = calcDamage();
    userChar.health = userChar.health - userDamage;
    opponent.health = opponent.health - opponentDamage;
    console.log(userChar.health);
    console.log(opponent.health);
    userResponse = window.confirm(`Battle!`);

    if (userChar.health <= 0)   {

    let selectChar = prompt(`${userChar.name} has been defeated, select a new hero! Type: 0, 1, or 2.`);
    let userChar = (characters[selectChar]);
    let userResponse = window.confirm(`Battle!`);
    }
}

