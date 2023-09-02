import { Definer } from "../generators/define";
import { standardCommodities } from "../data_table/commodities_tags";
import { fuckItImOut } from "./fuckitimout";

const commodity = Definer(standardCommodities).unwrapOr(fuckItImOut(Error(`Failed to generate Commodity. Commodity contained: ${standardCommodities}`)))

export {commodity}