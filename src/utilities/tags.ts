import { tradeSelector } from "../generators/trade_selector"
import { Definer } from "../generators/define"
import { atmosphere } from "../data table/atmosphere_tags"
import { biosphere } from "../data table/biosphere_tags"
import { population } from "../data table/population_tags"
import { techLevel } from "../data table/tech_level_tags"
import { temperature } from "../data table/temperature_tags"
import { lowTradeTag, highTradeTag } from "../data table/trade_tags"
import { worldTag } from "../data table/world_tags"

const atmos = Definer(atmosphere)
const bios = Definer(biosphere)
const pop = Definer(population)
const tchlvl = Definer(techLevel)
const temp = Definer(temperature)
const trade = tradeSelector(highTradeTag, lowTradeTag)
const world = Definer(worldTag)

const planet = {
    atmos,
    bios,
    pop,
    tchlvl,
    temp,
    trade,
    world,
}

export {planet}