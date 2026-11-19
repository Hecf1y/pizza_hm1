import classes from "./Basket.module.css";

export const Basket = (props) => {
  const { basket, onRemove } = props;
 
  const totalPrice = basket.reduce(
    (sum, pizza) => sum + Number(pizza.price),
    0
  );

  return (
    <section className={classes.basket} id="basket">
      <div className={classes.inner}>
        <h2 className={classes.title}>Корзина</h2>

        {basket.length === 0 ? (
          <p className={classes.empty}>Корзина пуста</p>
        ) : (
          <>
            <ul className={classes.list}>
              {basket.map((pizza) => (
                <li key={pizza.basketId} className={classes.item}>
                  <img
                    className={classes.image}
                    src={pizza.imageUrl}
                    alt={pizza.title}
                    draggable={false}
                  />
                  <span className={classes.name}>{pizza.title}</span>
                  <span className={classes.price}>{pizza.price} KGS</span>
                  <button
                    className={classes.remove}
                    onClick={() => onRemove(pizza.basketId)}
                    aria-label="Удалить из корзины"
                  >
                    🗑️
                  </button>
                </li>
              ))}
            </ul>

            <div className={classes.total}>
              Итого: <strong>{totalPrice} KGS</strong>
            </div>
          </>
        )}
      </div>
    </section>
  );
};