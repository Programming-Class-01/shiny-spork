import { getRandomIntInclusive, coinFlip } from "../utilities/roll_die";
import { ITradeTag } from "../data table/trade_tags";

function tradeSelector(highTradeTag: ITradeTag[], lowTradeTag: ITradeTag[]) {
    if (coinFlip()) { 
        const selectedTrade = getRandomIntInclusive(highTradeTag.length)
        return highTradeTag[selectedTrade]
    } else {
        const selectedTrade = getRandomIntInclusive(lowTradeTag.length)
        return lowTradeTag[selectedTrade]
    }
}
export {tradeSelector}