import { IAtmosphere } from "../data_table/atmosphere_tags";
import { IBiosphere } from "../data_table/biosphere_tags";
import { ICommodities } from "../data_table/commodities_tags";
import { IPopulation } from "../data_table/population_tags";
import { ITechLevel } from "../data_table/tech_level_tags";
import { ITemperature } from "../data_table/temperature_tags";
import { IWorldTags } from "../data_table/world_tags";

type IUnion = 
    ( IAtmosphere
    | IBiosphere
    | ICommodities
    | IPopulation
    | ITechLevel
    | ITemperature
    | IWorldTags
    )

export { IUnion };