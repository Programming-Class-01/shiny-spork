import { Result, Ok, Err } from "ts-results";
import { ITag } from "../utilities/ITag";

function Definer(tags: ITag[]): Result<ITag, string> {
    if (tags.length === 0) return Err(`Empty Array`)
    const result = tags.at(Math.floor(Math.random() * tags.length))
    if (!result) return Err(`undefined`)
    return Ok(result)
}

export { Definer }