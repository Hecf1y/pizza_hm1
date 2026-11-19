
import { Container } from "../Container/Container";
import classes from "./PizzaCards.module.css";
import { Card } from "antd";
const { Meta } = Card;

export const PizzaCards = (props) => {
  
  const { pizza_data, onAddToBasket } = props;

  const handeClick = (pizza) => {
    onAddToBasket(pizza);
  };

  return (
    <Container>
      <div className={classes.pizzaCards}>
        {pizza_data.map((pizza, index) => (
          <Card
    
            key={`${pizza.title}-${index}`}
            onClick={() => handeClick(pizza)}
            className={classes.card}
            cover={
              <img
                draggable={false}
                alt={pizza.title}
                src={pizza.imageUrl}
                className={classes.image}
              />
            }
          >
            <Meta
              className={classes.meta}
              title={pizza.title}
              description={pizza.descriptions}
            />

            <div className={classes.footer}>
              <p className={classes.price}>Цена: {pizza.price} KGS</p>
              <button
                className={classes.order}
                onClick={(e) => {
                  e.stopPropagation();
                  handeClick(pizza);
                }}
              >
                Добавить в корзину
              </button>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};
