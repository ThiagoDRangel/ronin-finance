import React from 'react';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import TableFoot from '../TableFoot';
import { jsPDF } from 'jspdf';
import useCryptoPrices from '../../Hooks/useCryptoPrices';
import earnings from '../../data/earnings';
import IEarnings from '../../interfaces/IEarnings';
import './styles.css';

const TableWrapper: React.FC = () => {
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

  const handleGeneratePdf = () => {
    const doc = new jsPDF();
    doc.text('Earnings Report:', 10, 10);
    doc.text(`Homeland: $ ${earningsInUsd.homeland.toFixed(2)}`, 10, 20);
    doc.text(`Katana USDC/RON: $ ${earningsInUsd.katanaUsdcRon.toFixed(2)}`, 10, 30);
    doc.text(`Katana AXS/RON: $ ${earningsInUsd.katanaAxsRon.toFixed(2)}`, 10, 40);
    doc.text(`Katana SLP/RON: $ ${earningsInUsd.katanaSlpRon.toFixed(2)}`, 10, 50);
    doc.text(`RON Staking: $ ${earningsInUsd.ronStaking.toFixed(2)}`, 10, 60);
    doc.text(`AXS Staking: $ ${earningsInUsd.axsStaking.toFixed(2)}`, 10, 70);
    doc.text(`Total: $ ${totalEarnings.toFixed(2)}`, 10, 80);
    doc.save('earnings-report.pdf');
  };

  return (
    <div className="table-wrapper">
      <table>
        <TableHead />
        <TableBody earningsInUsd={earningsInUsd} totalEarnings={totalEarnings} />
        <TableFoot />
      </table>
      <button onClick={handleGeneratePdf} className="btn-generate-pdf">Generate PDF</button>
    </div>
  );
}

export default TableWrapper;
