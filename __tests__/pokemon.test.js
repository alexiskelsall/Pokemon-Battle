const Pokemon = require(`../pokemon`)
const {Fire, Water, Grass, Normal} = require(`../elements`)
const {Charmander, Squirtle, Bulbasaur, Rattata} = require(`../species`)
const Pokeball = require(`../pokeballs`)
const Trainer = require(`../trainer`)
const battle = require(`../battle`)

describe(`pokemon methods`, () => {
    test(`takeDamage reduces pokemon's hitPoints by attackPoints`, () => {
        const eevee = new Pokemon ("Eevee", 55, 18, "Headbutt")
        const squirtle = new Pokemon ("Squirtle", 44, 16, "Surf")
        eevee.takeDamage(squirtle.attackDamage)
        expect(eevee.hitPoints).toBe(39)
    })
    test(`useMove returns a number for an attackDamage`, () => {
        const eevee = new Pokemon ("Eevee", 55, 18, "Headbutt")
        const output = eevee.useMove()
        expect(output).toBe(18)
        expect(typeof output).toBe("number")
    })
    test(`hasFainted returns a boolean if the pokemon's health is reduced to zero`, () => {
        const eevee = new Pokemon ("Eevee", 55, 18, "Headbutt")
        const squirtle = new Pokemon ("Squirtle", 44, 16, "Surf")
        eevee.takeDamage(squirtle.attackDamage)
        eevee.takeDamage(squirtle.attackDamage)
        eevee.takeDamage(squirtle.attackDamage)
        eevee.takeDamage(squirtle.attackDamage)
        expect(eevee.hasFainted()).toBe(true)
    })
})

describe('classes methods', () => {
    test('isEffectiveAgainst returns true when given pokemon is ineffective against current pokemmon', () =>{
        const flareon = new Fire ("Flareon", 65, 20, "Fire blast")
        const leafeon = new Grass ("Leafeon", 65, 17, "Giga drain")
        const output = flareon.isEffectiveAgainst(leafeon)
        expect(output).toBe(true) 
    })
    test('isEffectiveAgainst returns false when given pokemon is effective against current pokemmon', () =>{
        const leafeon = new Grass ("Leafeon", 65, 17, "Giga drain")
        const flareon = new Fire ("Flareon", 65, 20, "Fire blast")
        const output = leafeon.isEffectiveAgainst(leafeon)
        expect(output).toBe(false) 
    })
    test('isWeakTo returns true when the current pokemon is weak to the given pokemon', () =>{
        const leafeon = new Grass ("Leafeon", 65, 17, "Giga drain")
        const flareon = new Fire ("Flareon", 65, 20, "Fire blast")
        const output = leafeon.isWeakTo(flareon)
        expect(output).toBe(true) 
    })
    test('isWeakTo returns fasle when the current pokemon is not weak to the given pokemon', () =>{
        const leafeon = new Grass ("Leafeon", 65, 17, "Giga drain")
        const squirtle = new Pokemon ("Squirtle", 44, 16, "Surf")
        const output = leafeon.isWeakTo(squirtle)
        expect(output).toBe(false) 
    })
})

describe(`Pokeball methods`, () => {
    test(`throw captures a pokemon and stores it if the pokeball is empty`, () => {
        const squirtle = new Pokemon ("Squirtle", 44, 16, "Surf")
        const pokeball = new Pokeball
        pokeball.throw(squirtle)
        expect(pokeball.emptyBall).toBe(false)
        expect(pokeball.storedPokemon.name).toBe("Squirtle")
    })
    test(`if the pokeball isn't empty the user shouldn't be allowed to capture a pokemon with it`, () => {
        const squirtle = new Pokemon ("Squirtle", 44, 16, "Surf")
        const leafeon = new Grass ("Leafeon", 65, 17, "Giga drain")
        const pokeball = new Pokeball
        pokeball.throw(squirtle)
        pokeball.throw(leafeon)
        expect(pokeball.emptyBall).toBe(false)
        expect(pokeball.storedPokemon.name).toBe("Squirtle")
    })
    test(`returns the stored pokemon when invoked with no pokemon`, () => {
        const squirtle = new Pokemon ("Squirtle", 44, 16, "Surf")
        const pokeball = new Pokeball
        pokeball.throw(squirtle)
        pokeball.throw()
        expect(pokeball.emptyBall).toBe(false)
        expect(pokeball.storedPokemon.name).toBe("Squirtle")
    })
    test(`informs the user when the ball is empty`, () => {
        const pokeball = new Pokeball
        pokeball.throw()
        expect(pokeball.emptyBall).toBe(true)
        expect(pokeball.storedPokemon).toBe(null)
    })
    test(`isEmpty returns a boolean representing if a pokemon is stored inside`, () => {
        const squirtle = new Pokemon ("Squirtle", 44, 16, "Surf")
        const pokeball = new Pokeball
        pokeball.throw()
        const output = pokeball.isEmpty()
        expect(output).toBe(true) // tested with squirtle as well 
    })
    test(`contains returns the name of the pokemon stored`, () => {
        const squirtle = new Pokemon ("Squirtle", 44, 16, "Surf")
        const pokeball = new Pokeball
        pokeball.throw(squirtle)
        const output = pokeball.contains()
        expect(output).toBe("Squirtle") 
    })
    test(`contains return 'empty' when no pokemon is stored `, () => {
        const pokeball = new Pokeball
        const output = pokeball.contains()
        expect(output).toBe("Your pokeball is empty")
    })
})

describe(`trainer methods`, () => {
    test(`catch uses one of the trainers empty balls to catch a pokemon`, () => {
        const squirtle = new Pokemon ("Squirtle", 44, 16, "Surf")
        const leafeon = new Grass ("Leafeon", 65, 17, "Giga drain")
        const eevee = new Pokemon ("Eevee", 55, 18, "Headbutt")
        const charmander = new Charmander 
        const bulbasaur = new Bulbasaur 
        const ash = new Trainer
        ash.catch(squirtle)
        ash.catch(leafeon)
        ash.catch(eevee)
        expect(ash.belt[2].storedPokemon.name).toBe("Eevee")
    })
    test(`catch returns a message to the user of all the balls full`, () => {
        const squirtle = new Pokemon ("Squirtle", 44, 16, "Surf")
        const leafeon = new Grass ("Leafeon", 65, 17, "Giga drain")
        const eevee = new Pokemon ("Eevee", 55, 18, "Headbutt")
        const vaporeon = new Water ("Vaporeon", 70, 19, "Hydro pump")
        const charmander = new Charmander()
        const bulbasaur = new Bulbasaur() // creates an instance of it
        const rattata = new Rattata()
        const ash = new Trainer("Ash")
        ash.catch(squirtle)
        ash.catch(leafeon)
        ash.catch(eevee)
        ash.catch(vaporeon)
        ash.catch(charmander)
        ash.catch(bulbasaur)
        console.log(ash.belt[5])
        expect(ash.belt[5].storedPokemon.name).toBe("Bulbasaur")
        expect(ash.catch(rattata)).toBe("All Pokeballs are full!")
    })
    test(`getPokemon takes a pokemon name and searches for it in the belt and uses the pokeball's throw to return that pokemon`, () =>{
        const pokemonName = "Eevee"
        const squirtle = new Pokemon ("Squirtle", 44, 16, "Surf")
        const leafeon = new Grass ("Leafeon", 65, 17, "Giga drain")
        const eevee = new Pokemon ("Eevee", 55, 18, "Headbutt")
        const vaporeon = new Water ("Vaporeon", 70, 19, "Hydro pump")
        const ash = new Trainer("Ash")
        ash.catch(squirtle)
        ash.catch(leafeon)
        ash.catch(eevee)
        ash.catch(vaporeon)
        expect(ash.getPokemon(pokemonName).name).toBe("Eevee")

    })
})

describe(`fight func`, () => {
    test.only(`runs through a simulation of attacks until one pokemon has fainted`, () => {
        const vaporeon = new Water ("Vaporeon", 70, 19, "Hydro pump")
        const leafeon = new Grass ("Leafeon", 65, 17, "Giga drain")
        const ash = new Trainer("Ash")
        const sam = new Trainer("Sam")
        ash.catch(vaporeon)
        sam.catch(leafeon)
        const output = battle(ash, "Vaporeon", sam, "Leafeon")
        expect(output).toBe("Leafeon")
    })
})