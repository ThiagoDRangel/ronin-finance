import earnings from '../../data/earnings';
import ITableBodyProps from '../../interfaces/ITableBodyProps';
import './styles.css';

function TableBody({ earningsInUsd, totalEarnings }: ITableBodyProps) {
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
