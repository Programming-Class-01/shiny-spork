import { Err, Ok, Result } from "ts-results";

function getRandomIntInclusive(max: number, min = 1): Result<number, Error> {
    if (max>Number.MAX_SAFE_INTEGER || max<0) {
        return Err(new Error(`maximum integer size exceeded or maximum set to less than zero.`))
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Ok(Math.floor(Math.random() * (max - min + 1) + min));
    
}

function coinFlip(): boolean {
    return Boolean(getRandomIntInclusive(1,0))
}

export {coinFlip, getRandomIntInclusive}