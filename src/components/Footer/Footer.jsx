import { Container } from "../Container/Container";
import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <Container><footer className={classes.footer} id="contacts">
      <div className={classes.footer__inner}>
        <div className={classes.footer__brand}>
          <div className={classes.footer__logo}>Пицца</div>
          <p className={classes.footer__tagline}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            quos!
          </p>
        </div>

        <div className={classes.footer__col}>
          <h4 className={classes.footer__title}>Контакты</h4>
          <p>ул. Пиццная, 12</p>
          <p>+7 (900) 123-45-67</p>
          <p>hello@forno-doro.ru</p>
        </div>

        <div className={classes.footer__col}>
          <h4 className={classes.footer__title}>Часы работы</h4>
          <p>Пн–Чт: 11:00 – 23:00</p>
          <p>Пт–Сб: 11:00 – 01:00</p>
          <p>Вс: 12:00 – 22:00</p>
        </div>

        <div className={classes.footer__col}>
          <h4 className={classes.footer__title}>Мы в соцсетях</h4>
          <div className={classes.footer__socials}>
            <a href="#" className={classes.footer__social}>
              VK
            </a>
            <a href="#" className={classes.footer__social}>
              TG
            </a>
            <a href="#" className={classes.footer__social}>
              IG
            </a>
          </div>
        </div>
      </div>

      <div className={classes.footer__bottom}>
        <span>© {new Date().getFullYear()} Пицца. Все права защищены.</span>
      </div>
    </footer></Container>
    
  );
};
