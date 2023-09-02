import { IUnion } from "../utilities/ITag";
import { Result, Ok, Err } from "ts-results";
import { getRandomIntInclusive } from "../utilities/roll_die";

function Definer(tags: NonNullable<IUnion>[]): Result<IUnion, string> {
    let localTags = Object.freeze(tags)
    if (localTags.length === 0) return Err(`Empty Array`)
    const dieRoll = getRandomIntInclusive(localTags.length - 1, 0)
    if (dieRoll.err) return Err(`getRandomIntInclusive produced an error. Verify Array size.`)
    if (!localTags[dieRoll.val]) return Err(`undefined, check the data_table folder to verify integrity`)
    return Ok(localTags[dieRoll.val])
}
export { Definer }