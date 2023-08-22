import { getRandomIntInclusive } from "../utilities/roll_die";

function Definer<T>(tags: T[]) {
   const dieRoll = getRandomIntInclusive(tags.length - 1, 0)
    return tags[dieRoll]
}

export {Definer}