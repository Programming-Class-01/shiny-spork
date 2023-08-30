import { getRandomIntInclusive, coinFlip } from "../utilities/roll_die";
import { ITradeTag } from "../data_table/trade_tags";
import { Result, Ok, Err } from "ts-results";

function tradeSelector(highTradeTag: ITradeTag[], lowTradeTag: ITradeTag[]): Result<ITradeTag, string> {
    if (highTradeTag.length === 0 || lowTradeTag.length === 0) return Err(`Empty Array`)
    if (coinFlip()) { 
        const selectedTrade = getRandomIntInclusive(highTradeTag.length)
        if (selectedTrade.err) return Err(`getRandomIntInclusive produced an error. Verify Array size.`)
        const result = highTradeTag[selectedTrade.val]
        if (!result) return Err(`There is a problem with selecting High Trade`)
        return Ok(result)
    } else {
        const selectedTrade = getRandomIntInclusive(lowTradeTag.length)
        if (selectedTrade.err) return Err(`getRandomIntInclusive produced an error. Verify Array size.`)
        const result = lowTradeTag[selectedTrade.val]
        if (!result) return Err(`There is a problem with selecting Low Trade`)
        return Ok(result)
    }
}
export {tradeSelector}