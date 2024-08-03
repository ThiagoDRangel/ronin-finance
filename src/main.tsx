import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { CryptoPricesProvider } from './Context/CryptoPricesContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CryptoPricesProvider>
    <App />
  </CryptoPricesProvider>,
);
