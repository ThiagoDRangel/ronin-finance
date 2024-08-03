import { useEffect, useState } from 'react';
import useCryptoPrices from '../../Hooks/useCryptoPrices';
import iconHome from '../../assets/icon_home.jpg';
import iconAxs from '../../assets/iconAxs.png';
import iconRon from '../../assets/iconRon.png';
import iconUsdc from '../../assets/iconUsdc.png';
import './styles.css';

function Header() {
  
  const { prices, previousPrices } = useCryptoPrices();
  const [highlight, setHighlight] = useState({ axs: '', ron: '', usdc: '' });

  useEffect(() => {
    const newHighlight = { axs: '', ron: '', usdc: '' };

    if (prices.axs > previousPrices.axs) newHighlight.axs = 'highlight-green';
    else if (prices.axs < previousPrices.axs) newHighlight.axs = 'highlight-red';

    if (prices.ron > previousPrices.ron) newHighlight.ron = 'highlight-green';
    else if (prices.ron < previousPrices.ron) newHighlight.ron = 'highlight-red';

    if (prices.usdc > previousPrices.usdc) newHighlight.usdc = 'highlight-green';
    else if (prices.usdc < previousPrices.usdc) newHighlight.usdc = 'highlight-red';

    setHighlight(newHighlight);

    const timeout = setTimeout(() => setHighlight({ axs: '', ron: '', usdc: '' }), 500); // Remove o destaque após 500ms

    return () => clearTimeout(timeout);
  }, [previousPrices, prices]);

  return (
    <header className="container-header">
      <img alt="home" className="icon-home" src={iconHome} />
      <ul className="container-crypto">
        <li className="icon-price">
          <img alt="axs" src={iconAxs} />
          <div className={`${highlight.axs}`}>$ {prices.axs.toFixed(2)}</div>
        </li>
        <li className="icon-price">
          <img alt="ron" src={iconRon} />
          <div className={`${highlight.ron}`}>$ {prices.ron.toFixed(2)}</div>
        </li>
        <li className="icon-price">
          <img alt="usdc" src={iconUsdc} />
          <div className={`${highlight.usdc}`}>$ {prices.usdc.toFixed(2)}</div>
        </li>
      </ul>
      <button className="btn-wallet">Connect Wallet</button>
    </header>
  );
}

export default Header;
