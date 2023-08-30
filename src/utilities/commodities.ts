import { Definer } from "../generators/define";
import { standardCommodities } from "../data_table/commodities_tags";

const commodity = Definer(standardCommodities).unwrap()

export {commodity}