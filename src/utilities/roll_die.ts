function getRandomIntInclusive(max: number, min = 1): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function coinFlip(): boolean {
    return Boolean(getRandomIntInclusive(1,0))
}

export {coinFlip, getRandomIntInclusive}