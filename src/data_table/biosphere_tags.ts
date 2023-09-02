const biosphere = [
    { description: `Remnant Biosphere` },
    { description: `Microbial life forms exist` },
    { description: `No active Biosphere` },
    { description: `No active Biosphere` },
    { description: `Human-miscible Biosphere` },
    { description: `Human-miscible Biosphere` },
    { description: `Human-miscible Biosphere` },
    { description: `Immiscible biosphere` },
    { description: `Immiscible biosphere` },
    { description: `Hybrid biosphere` },
    { description: `Engineered biosphere` },
];

interface IBiosphere {
    description: string,
}

export { biosphere, IBiosphere };