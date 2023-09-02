import { getRandomIntInclusive, coinFlip } from "../utilities/roll_die";
import { ITradeTag } from "../data_table/trade_tags";
import { Result, Ok, Err } from "ts-results"

function tradeSelector(highTradeTag: ITradeTag[], lowTradeTag: ITradeTag[]): Result<ITradeTag, string> {
    if (highTradeTag.length === 0 || lowTradeTag.length === 0) return Err(`Empty Array`)
    if (coinFlip()) {
        const selectedTrade = getRandomIntInclusive(highTradeTag.length - 1, 0)

        if (selectedTrade.err) return Err(`Array sizing error`)
        
        if (selectedTrade.val < 0 || selectedTrade.val > highTradeTag.length) return Err(`Tried to select index number ${selectedTrade.val} in an array of length ${highTradeTag.length}`)
        
        const result = highTradeTag[selectedTrade.val]
        if (!result) return Err(`There is a problem with selecting High Trade. Result is ${result}, hightradetag is ${highTradeTag}. Selected val is ${selectedTrade.val}`)
        return Ok(result)
    } else {
        const selectedTrade = getRandomIntInclusive(lowTradeTag.length - 1, 0)
        
        if (selectedTrade.err) return Err(`Array sizing error`)
        
        const result = lowTradeTag[selectedTrade.val]
        
        if (!result) return Err(`There is a problem with selecting Low Trade`)
        return Ok(result)
    }
}
export { tradeSelector }