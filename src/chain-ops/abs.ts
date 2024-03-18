declare module '../chain-bundle' {
    interface NumberChain {
        abs(): NumberChain;
    }
}

export default {
    abs: Math.abs,
}