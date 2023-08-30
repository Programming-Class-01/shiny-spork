import { tradeSelector } from "../generators/trade_selector"
import { Definer } from "../generators/define"
import { atmosphere } from "../data table/atmosphere_tags"
import { biosphere } from "../data table/biosphere_tags"
import { population } from "../data table/population_tags"
import { techLevel } from "../data table/tech_level_tags"
import { temperature } from "../data table/temperature_tags"
import { lowTradeTag, highTradeTag } from "../data table/trade_tags"
import { worldTag } from "../data table/world_tags"

const atmos = Definer(atmosphere).unwrap()
const bios = Definer(biosphere).unwrap()
const pop = Definer(population).unwrap()
const tchlvl = Definer(techLevel).unwrap()
const temp = Definer(temperature).unwrap()
const trade = tradeSelector(highTradeTag, lowTradeTag).unwrap()
const world = Definer(worldTag).unwrap()

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