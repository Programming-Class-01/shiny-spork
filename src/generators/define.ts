import { Itag } from "../utilities/ITag";
import { Result, Ok, Err } from "ts-results";
import { getRandomIntInclusive } from "../utilities/roll_die";

function Definer(tags: Itag[]): Result<Itag, string> {
    if (tags.length === 0) return Err(`Empty Array`)
    const dieRoll = getRandomIntInclusive(tags.length - 1, 0)
    if (dieRoll.err) return Err(`getRandomIntInclusive produced an error. Verify Array size.`)
    const result = tags[dieRoll.val]
    if (!result) return Err(`undefined, check the data_table folder to verify integrity`)
    return Ok(result)
}
export { Definer }