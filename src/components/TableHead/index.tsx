import './styles.css';

function TableHead () {
  return (
    <thead className="container-form-head">
      <tr>
        <th className="table-title">Earn Control</th>
      </tr>
      <tr>
        <th className="item">Homeland (AXS)</th>
        <th className="item">Katana (USDC-RON)</th>
        <th className="item">Katana (AXS-RON)</th>
        <th className="item">Katana (SLP-RON)</th>
        <th className="item">RON Staking</th>
        <th className="item">AXS Staking</th>
      </tr>
    </thead>
  )
}

export default TableHead;
