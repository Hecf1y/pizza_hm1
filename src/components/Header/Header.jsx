import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__logo-icon">🍕</span>
        <span className="header__logo-text">
          Forno <em>d&apos;Oro</em>
        </span>
      </div>

      <nav className="header__nav">
        <a href="#menu" className="header__link">Меню</a>
        <a href="#about" className="header__link">О нас</a>
        <a href="#contacts" className="header__link">Контакты</a>
      </nav>

      <button className="header__cta">Заказать</button>
    </header>
  );
};

export default Header;