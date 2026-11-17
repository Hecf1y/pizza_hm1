import "./Header.css";

export const Header = (props) => {
  const { links } = props; //<~ Деструктуризация//

  console.log(links);

  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__logo-icon">🍕</span>
        <span className="header__logo-text">
          Норм<em>Пицца</em>
        </span>
      </div>

      <nav className="header__nav">
        {links.map((item) => (
          <a className="header__link" href="item.href">
            {item.title}
          </a>
        ))}
      </nav>

      <button className="header__cta">Заказать</button>
    </header>
  );
};
