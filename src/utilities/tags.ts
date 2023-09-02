import { tradeSelector } from "../generators/trade_selector"
import { Definer } from "../generators/define"
import { atmosphere } from "../data_table/atmosphere_tags"
import { biosphere } from "../data_table/biosphere_tags"
import { population } from "../data_table/population_tags"
import { techLevel } from "../data_table/tech_level_tags"
import { temperature } from "../data_table/temperature_tags"
import { lowTradeTag, highTradeTag } from "../data_table/trade_tags"
import { worldTag } from "../data_table/world_tags"
import { fuckItImOut } from "./fuckitimout"

const planet = {
    atmosphere: Definer(atmosphere).unwrapOr(fuckItImOut(Error(`Failed to generate atmosphere. Atmosphere contained: ${atmosphere}`))),
    biosphere: Definer(biosphere).unwrapOr(fuckItImOut(Error(`Failed to generate atmosphere. Biosphere contained: ${biosphere}`))),
    population: Definer(population).unwrapOr(fuckItImOut(Error(`Failed to generate atmosphere. Population contained: ${population}`))),
    techLevel: Definer(techLevel).unwrapOr(fuckItImOut(Error(`Failed to generate atmosphere. TechLevel contained: ${techLevel}`))),
    temperature: Definer(temperature).unwrapOr(fuckItImOut(Error(`Failed to generate atmosphere. Temperature contained: ${temperature}`))),
    trade: tradeSelector(highTradeTag, lowTradeTag).unwrapOr(fuckItImOut(Error(`Failed to generate atmosphere. High trade and Low trade contained: ${highTradeTag}, ${lowTradeTag}`))),
    world: Definer(worldTag).unwrapOr(fuckItImOut(Error(`Failed to generate atmosphere. worldTag contained: ${worldTag}`))),
}

export {planet}