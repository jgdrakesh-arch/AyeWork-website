import Header from './Header';
import Footer from './Footer';

export default function PageShell({ children }) {
  return (
    <div className="site-shell">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
