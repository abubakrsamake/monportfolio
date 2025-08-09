// src/component/Header.js
function Header({ isMenuOpen, toggleMenu, page, handleNavClick }) {
  return (
    <header className="header-main">
      <div className="header-left">
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </button>
        <div className="logo">Abu'bakr</div>
      </div>

      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#" className={page === 'Home' ? 'active' : ''} onClick={() => handleNavClick('Home')}>Home</a>
        <a href="#" className={page === 'Services' ? 'active' : ''} onClick={() => handleNavClick('Services')}>Services</a>
        <a href="#" className={page === 'About' ? 'active' : ''} onClick={() => handleNavClick('About')}>About me</a>
        <a href="#" className={page === 'Portfolio' ? 'active' : ''} onClick={() => handleNavClick('Portfolio')}>Portfolio</a>
        <a href="#" className={page === 'Contact' ? 'active' : ''} onClick={() => handleNavClick('Contact')}>Contactez Moi</a>
      </nav>

      <button className="btn-primary">Contactez Moi</button>
    </header>
  );
}

export default Header;
