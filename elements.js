const Pokemon = require(`./pokemon`)

class Fire extends Pokemon {
    constructor(name, hitPoints, attackDamage, move = "tackle") { //still needs args passing through 
        super(name, hitPoints, attackDamage, move) //calls the pokemon constructor
        this.type = "Fire"
    }
    isEffectiveAgainst(pokemon) {
        if (pokemon.type === "Grass") {
            return true
        } else return false
    }
    isWeakTo(pokemon) {
        if (pokemon.type === "Water") {
            return true
        } else return false
    }
}

class Water extends Pokemon {
    constructor(name, hitPoints, attackDamage, move = "tackle") {
        super(name, hitPoints, attackDamage, move)
        this.type = "Water"
    }
    isEffectiveAgainst(pokemon) {
        if (pokemon.type === "Fire") {
            return true
        } else return false
    }
    isWeakTo(pokemon) {
        if (pokemon.type === "Grass") {
            return true
        } else return false
    }
}

class Grass extends Pokemon {
    constructor(name, hitPoints, attackDamage, move = "tackle") {
        super(name, hitPoints, attackDamage, move)
        this.type = "Grass"
    }
    isEffectiveAgainst(pokemon) {
        if (pokemon.type === "Water") {
            return true
        } else return false
    }
    isWeakTo(pokemon) {
        if (pokemon.type === "Fire") {
            return true
        } else return false
    }
}

class Normal extends Pokemon {
    constructor(name, hitPoints, attackDamage, move = "tackle") {
        super(name, hitPoints, attackDamage, move)
        this.type = "Normal"
    }
}

module.exports = { Fire, Water, Grass, Normal }