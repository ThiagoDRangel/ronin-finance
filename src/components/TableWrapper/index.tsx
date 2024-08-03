import React from 'react';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import TableFoot from '../TableFoot';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
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
    doc.setFontSize(18);
    doc.text('Earnings Report', 14, 22);

    autoTable(doc, {
      startY: 30,
      head: [['Item', 'Earnings in USD']],
      body: [
        ['Homeland', `$ ${earningsInUsd.homeland.toFixed(2)}`],
        ['Katana USDC/RON', `$ ${earningsInUsd.katanaUsdcRon.toFixed(2)}`],
        ['Katana AXS/RON', `$ ${earningsInUsd.katanaAxsRon.toFixed(2)}`],
        ['Katana SLP/RON', `$ ${earningsInUsd.katanaSlpRon.toFixed(2)}`],
        ['RON Staking', `$ ${earningsInUsd.ronStaking.toFixed(2)}`],
        ['AXS Staking', `$ ${earningsInUsd.axsStaking.toFixed(2)}`],
        ['Total', `$ ${totalEarnings.toFixed(2)}`],
      ],
    });

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
