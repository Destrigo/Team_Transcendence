import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div style={{ maxWidth: 900, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Dashboard</h1>
      <nav style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
        <Link to="/trading">Trading</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
        <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
          <h3>Portfolio Value</h3>
          <p style={{ fontSize: 24, fontWeight: 'bold' }}>$10,000.00</p>
          <small>Starting balance</small>
        </div>
        <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
          <h3>P&L</h3>
          <p style={{ fontSize: 24, fontWeight: 'bold', color: 'green' }}>+$0.00</p>
          <small>All time</small>
        </div>
        <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
          <h3>Open Positions</h3>
          <p style={{ fontSize: 24, fontWeight: 'bold' }}>0</p>
          <small>Active holdings</small>
        </div>
      </div>
      <p style={{ marginTop: 32, color: '#888' }}>TODO: connect to real portfolio API</p>
    </div>
  );
}
