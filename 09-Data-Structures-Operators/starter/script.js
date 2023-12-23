'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  //1)

  const [players1, players2] = game.players;
  //onst players1 = game.players[0]; 
  //const players2 = game.players[1];
  console.log(players1, players2);

  //2)

  const [gk, ...fieldPlayers] = players1;
  console.log(gk, fieldPlayers);

  //3)
  
  const allPlayers = [...players1, ...players2];
  console.log(allPlayers);

  //4)
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  console.log (players1Final);

  //5)
const {team1, x:draw, team2} = {...game.odds};
console.log(team1, draw, team2);

//6)
function printGoals(...p){
  console.log(...p, p.length);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7)
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

//1)
for (const [i,jug] of game.scored.entries()){
  console.log(`El Gol ${i+1} fue hecho por ${jug}`);
};

//2)
const odds = Object.values(game.odds);
console.log(odds);
let media = 0;
for (const odd of odds) media += odd;
media /= odds.length;
console.log(media);

//3)

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

for (const [team, odd] of Object.entries(game.odds)) {
  console.log(team, odd, game[team]);
}

//4)
let goleador = {};
for (const jugador of game.scored) {
  console.log(jugador);
  goleador[jugador] ? goleador[jugador]++ : (goleador[jugador] = 1) ; 
}
console.log(goleador);
const miobjeto = {};
for (let i=1; i<10; i++){
miobjeto[`pep`+i] = i+1;
}
console.log(miobjeto);

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
  ]);
//1)
  const events = new Set();
  for (const item of gameEvents.values()) {
    events.add(item);
  };

  console.log(events);
//2)
  gameEvents.delete(64);

  console.log(gameEvents);

  //3)

  console.log(`sucedio un evento cada ${90/gameEvents.size} minutos`);

  //4)

 for (const [minuto, tipo] of gameEvents.entries()){
  console.log(minuto <=45 ?`[primer tiempo]  ` : `[segundo tiempo]  `,`${minuto}: `, tipo);
 }


 //1)
 
 

 document.body.append(document.createElement('textarea'));
 document.body.append(document.createElement('button'));
 document.querySelector('textarea').style.fontSize = '18pt';
 

 
 document.querySelector('button').addEventListener('click', function(){ 
    const p = document.querySelector('textarea').value;
   
    let camel0 = p.trim ();
    let  r = camel0.indexOf('_');

    
    if (r != -1) {
     camel0 = camel0.toLowerCase();
     for (let i = 0; i < p.length; i++){
       r = camel0.indexOf('_');
       if (r != -1){
       camel0 = camel0.substring(0,r).concat(camel0[r+1].toUpperCase()).concat(camel0.slice(r+2));
       }
     }; 
   };
  
   document.querySelector('textarea').value = camel0;

   let camel1 = camel0.split('\n');
   console.log(camel1);

   for (let a = 0; a<camel1.length; a++){
    console.log(camel1[a].padEnd(camel1[a].length+a+1,'*').trim());
   }

});



