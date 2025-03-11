const uncommon = 'You got a Elf Blook'
const rare = 'You got a Jester Blook'
const epic = 'You got a Unicorn Blook'
const legendary = 'You got a King Blook'
const supreme = 'You got a Agent Owl Blook'
const mythical = 'You got a Dark Dragon Blook'

let chance = Math.random()

if (chance >= .8) {
    console.log(uncommon)
} else if (chance >= .25) {
    console.log(rare)
} else if (chance >= .1) {
    console.log(epic)
} else if (chance >= .01) {
    console.log(legendary)
} else if (chance >= .0005) {
    console.log(supreme)
} else if (chance >= .000001) {
    console.log(mythical)
}

// MORE ADVANCED VERSION BELOW

const blooks = {
    uncommon: 'You got a Uncommon Blook',
    rare: 'You got a Rare Blook', 
    epic: 'You got a Epic Blook',
    legendary: 'You got a Legendary Blook',
    supreme: 'You got a Supreme Blook',
    mythical: 'You got a Mythical Blook'
}

const chances = [
    { rarity: 'uncommon', chance: 50}, // 50%
    { rarity: 'rare', chance: 25}, // 25%
    { rarity: 'epic', chance: 15}, // 15%
    { rarity: 'legendary', chance: 7}, // 7%
    { rarity: 'supreme', chance: 2}, // 2%
    { rarity: 'mythical', chance: 1} // 1%
]
function getRandomBlook() {
    const totalChance = chances.reduce((sum, item) => sum + item.chance, 0) 
    let randomNum = Math.random() * totalChance

    for (let item of chances) {
        if (randomNum < item.chance) {
            return item.rarity
        }
        randomNum -= item.chance
    }
}
const rarity = getRandomBlook()
let openMessage = `${blooks[rarity]}!`
console.log(openMessage)
