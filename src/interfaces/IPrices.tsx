export default interface IPrices {
    axs: number;
    ron: number;
    usdc: number;
}

export interface ICryptoPrices {
    prices: IPrices;
    previousPrices: IPrices;
}