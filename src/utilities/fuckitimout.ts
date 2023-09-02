// fuck it, I'm out.

function fuckItImOut(err: Error = new Error(`FUck it, I'm Out.`), code: number = 1): never {
    console.error(err);
    process.exit(code);
}

export { fuckItImOut }