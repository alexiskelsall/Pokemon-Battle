function battle(trainer1, pokemon1, trainer2, pokemon2) {

    const poke1 = trainer1.getPokemon(pokemon1)
    const poke2 = trainer2.getPokemon(pokemon2)

    let attacker = poke1
    let defender = poke2

    while (!attacker.hasFainted() && !defender.hasFainted()) { // this loop will run as long as the condition is met
        let damage = attacker.useMove()
        if (defender.isWeakTo(attacker)) {
            damage *= 1.25
            console.log(`That was an effective attack!`)
        } else if (defender.isEffectiveAgainst(attacker)) {
            damage *= 0.75
            console.log("It's not very effective...")
        } else {
            console.log("It's a normal hit.")
        }
        defender.takeDamage(damage)


        if (defender.hasFainted()) {
            console.log(`${defender.name} has fainted!`)
            console.log(`${attacker.name} wins!`)
            return attacker.name
        }

        [attacker, defender] = [defender, attacker] //deconstructed array that switches the attacker and defender around

    }
}

module.exports = battle