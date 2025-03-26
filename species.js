const {Fire, Water, Grass, Normal} = require(`./elements`)

class Charmander extends Fire {
    constructor(){ //nothing is added here - this would be for more stats added
    super("Charmander", 44, 17, "Ember") //super is calling the fire class's constructor which is the pokemon's constructor 
    } //hard coded as these will always be specific stats to charmander
}

class Squirtle extends Water {
    constructor(){
    super("Squirtle", 44, 16, "Water gun")
    }
}

class Bulbasaur extends Grass {
    constructor(){
    super("Bulbasaur", 45, 16, "Vine whip")
    }
}

class Rattata extends Normal {
    constructor(){
    super("Rattata", 44, 16)
    }
}

module.exports = {Charmander, Squirtle, Bulbasaur, Rattata}