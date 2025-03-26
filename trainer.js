const Pokeball = require(`./pokeballs`)

class Trainer {
    constructor(name) { //each trainer will have a name 
        this.name = name;
        this.belt = [
            new Pokeball(), //store 6 instance of pokeball in an array
            new Pokeball(),
            new Pokeball(),
            new Pokeball(),
            new Pokeball(),
            new Pokeball(),
        ]
    }
    catch(pokemon) {

        const emptyBall = this.belt.find(ball => ball.isEmpty()) // no {} means it returns automatically 

        if (emptyBall) {
            return emptyBall.throw(pokemon)
        }
        console.log("All Pokeballs are full!")
        return "All Pokeballs are full!"
    }
    getPokemon(pokemonName) {

        const foundBall = this.belt.find((ball) => 
            ball.storedPokemon && ball.storedPokemon.name === pokemonName
        ) 

        if (foundBall) {
            return foundBall.throw()
        }
    }
}






module.exports = Trainer