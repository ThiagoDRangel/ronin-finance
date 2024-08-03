import useCryptoPrices from '../../Hooks/useCryptoPrices';
import earnings from '../../data/earnings';
import IEarnings from '../../interfaces/IEarnings';
import './styles.css';

function TableBody() {

  const { prices } = useCryptoPrices();

  const earningsInUsd: IEarnings = {
    homeland: earnings.homeland * prices.axs,
    katanaUsdcRon: earnings.katanaUsdcRon * prices.ron,
    katanaAxsRon: earnings.katanaAxsRon * prices.ron,
    katanaSlpRon: earnings.katanaSlpRon * prices.ron,
    ronStaking: earnings.ronStaking * prices.ron,
    axsStaking: earnings.axsStaking * prices.axs,
  };

  const totalEarnings = Object.values(earningsInUsd).reduce((acc, curr) => acc + curr, 0);

  return (
    <tbody className="form-content">
      <tr>
        <td className="content-item">{earnings.homeland}</td>
        <td className="content-item">{earnings.katanaUsdcRon}</td>
        <td className="content-item">{earnings.katanaAxsRon}</td>
        <td className="content-item">{earnings.katanaSlpRon}</td>
        <td className="content-item">{earnings.ronStaking}</td>
        <td className="content-item">{earnings.axsStaking}</td>
      </tr>
      <tr>
        <td className="content-earn">$ {earningsInUsd.homeland.toFixed(2)}</td>
        <td className="content-earn">$ {earningsInUsd.katanaUsdcRon.toFixed(2)}</td>
        <td className="content-earn">$ {earningsInUsd.katanaAxsRon.toFixed(2)}</td>
        <td className="content-earn">$ {earningsInUsd.katanaSlpRon.toFixed(2)}</td>
        <td className="content-earn">$ {earningsInUsd.ronStaking.toFixed(2)}</td>
        <td className="content-earn">$ {earningsInUsd.axsStaking.toFixed(2)}</td>
      </tr>
      <tr>
        <td className="content-final">$ {totalEarnings.toFixed(2)}</td>
      </tr>
    </tbody>
  );
}

export default TableBody;
