import { getRandomIntInclusive } from "../utilities/roll_die";
import { Result, Ok, Err } from "ts-results";

function Definer<T>(tags: T[]): Result<T, Error> {
   const dieRoll = getRandomIntInclusive(tags.length - 1, 0)
    const result = tags[dieRoll]
    if (!result) return Err(new Error(`There seems to be a problem.`))
    return Ok(result)
}

export {Definer}