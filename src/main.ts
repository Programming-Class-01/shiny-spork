import { planet } from "./utilities/tags";
import { commodity } from "./utilities/commodities";
console.log(planet);
console.log(
    `This world is ${planet.world.description}.
     The atmosphere is ${planet.atmosphere.description}.
     The temperature is ${planet.temperature.description}.
     The biosphere is ${planet.biosphere.description}.
     The population is ${planet.population.description}.
     The tech level is ${planet.techLevel.description}.
     The trade nature is ${planet.trade.description}.
     The local commodity is ${commodity.cargo}, ${commodity.cost} credits, TL ${commodity.techLevel}, ${commodity.type}`
);