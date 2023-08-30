import { Definer } from "../generators/define";
import { standardCommodities } from "../data table/commodities_tags";

const commodity = Definer(standardCommodities).unwrap()

export {commodity}