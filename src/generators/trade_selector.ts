import { getRandomIntInclusive, coinFlip } from "../utilities/roll_die";
import { ITradeTag } from "../data table/trade_tags";
import { Result, Ok, Err } from "ts-results";

function tradeSelector(highTradeTag: ITradeTag[], lowTradeTag: ITradeTag[]): Result<ITradeTag, Error> {
    if (coinFlip()) { 
        const selectedTrade = getRandomIntInclusive(highTradeTag.length)
        const result = highTradeTag[selectedTrade]
        if (!result) return Err(new Error(`There is a problem with selecting High Trade`))
        return Ok(result)
    } else {
        const selectedTrade = getRandomIntInclusive(lowTradeTag.length)
        const result = lowTradeTag[selectedTrade]
        if (!result) return Err(new Error(`There is a problem with selecting Low Trade`))
        return Ok(result)
    }
}
export {tradeSelector}