const blooks = {
    uncommon: ['Elf', 'Witch', 'Wizard', 'Fairy', 'Slime Monster'],
    rare: ['Jester', 'Dragon', 'Queen'],
    epic: ['Unicorn'],
    legendary: ['King'],
    supreme: ['Agent Owl', 'Wise Owl', 'Master Elf'],
    mythical: ['Phantom King', 'Dark Dragon']
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

function getRandomBlookFromRarity() {
    const rarity = getRandomBlook()
    const blookList = blooks[rarity]
    const randomBlook = blookList[Math.floor(Math.random() * blookList.length)]
    return `${randomBlook}!`
}


console.log(getRandomBlookFromRarity())
function openPack() {
    document.getElementById("blookResult").textContent = getRandomBlookFromRarity()
}

/**
    okay now it should work on the page
*/