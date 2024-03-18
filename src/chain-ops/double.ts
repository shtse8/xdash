declare module '../chain-bundle' {
    interface NumberChain {
        double(): NumberChain;
    }
}

export default {
    double: (value: number) => value * 2,
}