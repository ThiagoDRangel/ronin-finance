import { useContext } from 'react';
import { CryptoPricesContext } from '../Context/CryptoPricesContext';

const useCryptoPrices = () => {
  const context = useContext(CryptoPricesContext);
  if (context === undefined) {
    throw new Error('useCryptoPrices must be used within a CryptoPricesProvider');
  }
  return context;
};

export default useCryptoPrices;
