import { planet } from "./utilities/tags";
import { commodity } from "./utilities/commodities";
console.log(planet);
console.log(
    `This world is ${planet.world.description}.
     The atmosphere is ${planet.atmos.description}.
     The temperature is ${planet.temp.description}.
     The biosphere is ${planet.bios.description}.
     The population is ${planet.pop.description}.
     The tech level is ${planet.tchlvl.description}.
     The trade nature is ${planet.trade.description}.
     The local commodity is ${commodity.cargo}, ${commodity.cost} credits, TL ${commodity.techLevel}, ${commodity.type}`
);