class Pokemon {
    constructor(name, hitPoints, attackDamage, move = "tackle"){
        this.name = name;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.move = move
    }

    takeDamage(attackPoints){
        this.hitPoints -= attackPoints
    }

    useMove(){
        console.log(`Pokemon ${this.name} used ${this.move}`)
        return this.attackDamage
    }

    hasFainted(){
        if(this.hitPoints <= 0){
            return true
        } else return false 
    }
}

module.exports = Pokemon
