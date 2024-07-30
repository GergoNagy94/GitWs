// Usage: node showFirst.js

const getBeers = require('../data')

function getFirstBeer() {
    const beers = getBeers();
    return beers[0];
    // TODO: return the first beer object (use `getBeers` for the solution)
}

if (getFirstBeer()?.name === "Rivet red") {
    console.log("Success ✅");
} else {
    console.log("Not quite right");
}
