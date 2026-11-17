import "./PizzaCards.css";

import { Card } from "antd";
const { Meta } = Card;

export const PizzaCards = (props) => {
  const { pizza_data } = props;

  const handeClick = (pizza_data) => {
    console.log(pizza_data);
  };
  console.log(pizza_data);

  return (
    <div className="pizzaCards">
      {pizza_data.map((pizza_data) => (
        <Card
          onClick={() => handeClick(pizza_data)}
          className="card"
          cover={
            <img
              draggable={false}
              alt={pizza_data.title}
              src={pizza_data.imageUrl}
            />
          }
        >
          <Meta
            className="meta"
            title={pizza_data.title}
            description={pizza_data.descriptions}
            price={pizza_data.price}
          />
        </Card>
      ))}
    </div>
  );
};
