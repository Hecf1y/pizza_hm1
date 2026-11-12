import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">🍕 Forno d&apos;Oro</div>
          <p className="footer__tagline">
            Настоящая неаполитанская пицца в самом сердце города.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Контакты</h4>
          <p>ул. Пиццная, 12</p>
          <p>+7 (900) 123-45-67</p>
          <p>hello@forno-doro.ru</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Часы работы</h4>
          <p>Пн–Чт: 11:00 – 23:00</p>
          <p>Пт–Сб: 11:00 – 01:00</p>
          <p>Вс: 12:00 – 22:00</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Мы в соцсетях</h4>
          <div className="footer__socials">
            <a href="#" className="footer__social">VK</a>
            <a href="#" className="footer__social">TG</a>
            <a href="#" className="footer__social">IG</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Forno d&apos;Oro. Все права защищены.</span>
      </div>
    </footer>
  );
};

export default Footer;