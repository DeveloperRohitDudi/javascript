// syntax of making inheritance by __proto__ prototype
const jupiter = {
    Chariots: 4,
    passengers: 8,
    printers: 3
}

const rower = {
    batteries: 12,
    heliumtanks: 5
}

const spaceship = {
    jupiters: 6,
    lifeSuportSystem: 6,
    rowers: 12,
    __proto__: jupiter
}

console.log('count os chariots from jupiter obj: ', spaceship.Chariots);

// modern syntax
Object.setPrototypeOf(rower, spaceship);
console.log('rowers count from rower obj: ', rower.rowers);
''