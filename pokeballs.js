class Pokeball {
    constructor() {
        this.emptyBall = true;
        this.storedPokemon = null;
    }
    throw(pokemon) {
        if (this.emptyBall === true && pokemon) {
            this.emptyBall = false
            this.storedPokemon = pokemon
            console.log(`You caught ${pokemon.name}!`)
            return this.storedPokemon
        }
        if (this.emptyBall === false && this.storedPokemon !== null && pokemon) {
            console.log(`This pokeball is full!`)
        }
        if (this.emptyBall === false && !pokemon) {
            console.log(`Go ${this.storedPokemon.name}!`)
            return this.storedPokemon
        }
        if (this.emptyBall === true && this.storedPokemon === null) {
            console.log(`You have no Pokemon to battle with!`)
            return null
        }
    }
    isEmpty() {
        if (this.emptyBall === true) {
            return true
        } else return false
    }
    contains() {
        if (this.emptyBall === false && this.storedPokemon !== null) {
            return this.storedPokemon.name
        } else {
            return "Your pokeball is empty"
        }
    }
}

module.exports = Pokeball