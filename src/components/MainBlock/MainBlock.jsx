import { useState } from "react";
import "./MainBlock.css";

const PIZZAS = [
  {
    id: 1,
    name: "Маргарита",
    emoji: "🍅",
    tagline: "Классика Неаполя",
    ingredients: "Томаты, моцарелла, базилик, оливковое масло",
    recipe:
      "Раскатайте тесто, смажьте томатным соусом. Выложите моцареллу и половинки черри. Выпекайте при 250°C 8 минут. Перед подачей добавьте свежий базилик и оливковое масло.",
    price: "490 ₽",
    accent: "#e63946",
  },
  {
    id: 2,
    name: "Пепперони",
    emoji: "🌶️",
    tagline: "Острая и сытная",
    ingredients: "Пепперони, моцарелла, томатный соус, орегано",
    recipe:
      "На тесто нанесите густой томатный соус. Щедро посыпьте моцареллой. Разложите слайсы пепперони. Выпекайте при 250°C 10 минут до хрустящих краёв. Посыпьте орегано.",
    price: "590 ₽",
    accent: "#ff6b35",
  },
  {
    id: 3,
    name: "Четыре сыра",
    emoji: "🧀",
    tagline: "Для любителей сыра",
    ingredients: "Моцарелла, горгонзола, пармезан, чеддер",
    recipe:
      "Смажьте тесто сливочным соусом. Выложите слоями моцареллу, чеддер, пармезан и горгонзолу. Выпекайте при 240°C 9 минут. Подавайте с мёдом и грецким орехом.",
    price: "650 ₽",
    accent: "#f7b32b",
  },
];

function PizzaCard({ pizza }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`card ${flipped ? "card--flipped" : ""}`}
      style={{ "--accent": pizza.accent }}
    >
      <div className="card__inner">
        <div className="card__face card__face--front">
          <div className="card__emoji">{pizza.emoji}</div>
          <h3 className="card__name">{pizza.name}</h3>
          <p className="card__tagline">{pizza.tagline}</p>
          <p className="card__ingredients">{pizza.ingredients}</p>
          <div className="card__price">{pizza.price}</div>
          <button
            className="card__btn"
            onClick={() => setFlipped(true)}
          >
            Рецепт
          </button>
        </div>

        <div className="card__face card__face--back">
          <h3 className="card__name">{pizza.name}</h3>
          <p className="card__recipe-label">Рецепт</p>
          <p className="card__recipe">{pizza.recipe}</p>
          <button
            className="card__btn card__btn--back"
            onClick={() => setFlipped(false)}
          >
            Назад
          </button>
        </div>
      </div>
    </div>
  );
}

function MainBlock() {
  return (
    <main className="main" id="menu">
      <section className="main__hero">
        <h1 className="main__title">
          Пицца, <span>испечённая с&nbsp;душой</span>
        </h1>
        <p className="main__subtitle">
          Три авторских рецепта. Нажмите «Рецепт», чтобы заглянуть на нашу кухню.
        </p>
      </section>

      <section className="main__cards">
        {PIZZAS.map((p) => (
          <PizzaCard key={p.id} pizza={p} />
        ))}
      </section>
    </main>
  );
}

export default MainBlock;