import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ maxWidth: 400, margin: '100px auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
    <h1>404</h1>
    <p>Page not found.</p>
    <Link to="/">Go home</Link>
  </div>
);

export default NotFound;
