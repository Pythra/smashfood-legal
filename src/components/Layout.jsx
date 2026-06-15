import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children, title }) {
  const { pathname } = useLocation();

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link to="/" className="brand">
            Smashfood
          </Link>
          <nav className="nav">
            <Link to="/privacy-policy" className={pathname === '/privacy-policy' ? 'active' : ''}>
              Privacy Policy
            </Link>
            <Link to="/data-deletion" className={pathname === '/data-deletion' ? 'active' : ''}>
              Data Deletion
            </Link>
          </nav>
        </div>
      </header>
      <main className="page">
        {title && <h1>{title}</h1>}
        {children}
      </main>
    </>
  );
}
