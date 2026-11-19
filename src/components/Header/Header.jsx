import { Container } from "../Container/Container";
import classes from "./Header.module.css";

export const Header = (props) => {
  const { links } = props; //<~ Деструктуризация//

const scrollToBasket = () => {
    const basket = document.getElementById("basket");
    if (basket) {
      basket.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (<header className={classes.header}>
    <Container className={classes.innerHeader}>
      
        <nav className={classes.header__nav}>
          {links.map((item) => (
            <a className={classes.header__link} href={item.href}>
              {item.title}
            </a>
          ))}
        </nav>

        <button 
        className={classes.header__cta}
        onClick={scrollToBasket}
        type="button"
        >Корзина</button>
      
    </Container></header>
  );
};
