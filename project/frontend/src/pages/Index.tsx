import { Link } from 'react-router-dom';

const Index = () => (
  <div style={{ maxWidth: 600, margin: '80px auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
    <h1>📈 PaperTrade</h1>
    <p>Simulated trading — practice with real market data, no real money.</p>
    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32 }}>
      <Link to="/login"><button>Login</button></Link>
    </div>
  </div>
);

export default Index;
