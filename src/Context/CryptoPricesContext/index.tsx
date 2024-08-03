import React, { createContext, useEffect, useState } from 'react';
import IPrices, { ICryptoPrices } from '../../interfaces/IPrices';
import IPriceProps from '../../interfaces/IPriceProps';

const CryptoPricesContext = createContext<ICryptoPrices | undefined>(undefined);

const CryptoPricesProvider: React.FC<IPriceProps> = ({ children }) => {
  const [prices, setPrices] = useState<IPrices>({ axs: 0, ron: 0, usdc: 0 });
  const [previousPrices, setPreviousPrices] = useState<IPrices>({ axs: 0, ron: 0, usdc: 0 });

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const [axsResponse, ronResponse, usdcResponse] = await Promise.all([
          fetch('https://api.coinlore.net/api/ticker/?id=46575'),
          fetch('https://api.coinlore.net/api/ticker/?id=64703'),
          fetch('https://api.coinlore.net/api/ticker/?id=33285'),
        ]);

        const axsData = await axsResponse.json();
        const ronData = await ronResponse.json();
        const usdcData = await usdcResponse.json();

        setPreviousPrices(prices);
        setPrices({
          axs: parseFloat(axsData[0].price_usd),
          ron: parseFloat(ronData[0].price_usd),
          usdc: parseFloat(usdcData[0].price_usd)
        });
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 1000);

    return () => clearInterval(interval);
  }, [prices]);

  return (
    <CryptoPricesContext.Provider value={{ prices, previousPrices }}>
      {children}
    </CryptoPricesContext.Provider>
  );
};

export { CryptoPricesContext, CryptoPricesProvider };
