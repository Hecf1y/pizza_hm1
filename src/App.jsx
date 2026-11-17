import "./App.css";

import { Header, MainBlock, PizzaCards, Footer } from "./components";

const App = () => {

  const links = [
    {
      title: "Меню",
      href: "#",
    },
    {
      title: "О нас",
      href: "#",
    },
    {
      title: "Контакты",
      href: "#",
    },
  ];

  const pizza_data = [
    {
      title: "Маргарита",
      descriptions:
        "Классическая пицца с томатным соусом, моцареллой и свежим базиликом",
      price: "450",
      imageUrl:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600",
    },
    {
      title: "Пепперони",
      descriptions: "Пикантная пепперони, моцарелла и фирменный томатный соус",
      price: "520",
      imageUrl:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600",
    },
    {
      title: "Четыре сыра",
      descriptions: "Моцарелла, пармезан, чеддер и дорблю на тонком тесте",
      price: "590",
      imageUrl:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600",
    },
    {
      title: "Гавайская",
      descriptions: "Нежное куриное филе, сочные кусочки ананаса и моцарелла",
      price: "540",
      imageUrl:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
    },
    {
      title: "Мясная",
      descriptions: "Говядина, пепперони, ветчина и бекон с томатным соусом",
      price: "650",
      imageUrl:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600",
    },
    {
      title: "Диабло",
      descriptions: "Острая пепперони, халапеньо, красный лук и сыр моцарелла",
      price: "580",
      imageUrl:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600",
    },
    {
      title: "Вегетарианская",
      descriptions: "Помидоры, болгарский перец, оливки, лук и шампиньоны",
      price: "480",
      imageUrl:
        "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=600",
    },
    {
      title: "Карбонара",
      descriptions: "Бекон, сливочный соус, моцарелла и свежий тимьян",
      price: "600",
      imageUrl:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600",
    },
    {
      title: "Тоскана",
      descriptions: "Вяленые томаты, прошутто, руккола и пармезан",
      price: "620",
      imageUrl:
        "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600",
    },
    {
      title: "Цезарь",
      descriptions:
        "Курица, салат романо, черри и пармезан со сливочным соусом",
      price: "560",
      imageUrl:
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600",
    },
    {
      title: "Мексиканская",
      descriptions: "Острая говядина, фасоль, халапеньо и перец чили",
      price: "610",
      imageUrl:
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600",
    },
    {
      title: "Средиземноморская",
      descriptions: "Фета, оливки, черри, красный лук и орегано",
      price: "570",
      imageUrl:
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600",
    },
    {
      title: "Барбекю",
      descriptions: "Курица, бекон, красный лук и соус барбекю",
      price: "630",
      imageUrl:
        "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?w=600",
    },
    {
      title: "Тартюфо",
      descriptions: "Грибы, трюфельный соус, моцарелла и пармезан",
      price: "720",
      imageUrl:
        "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=600",
    },
    {
      title: "Сицилийская",
      descriptions: "Анчоусы, оливки, каперсы и томатный соус",
      price: "590",
      imageUrl:
        "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?w=600",
    },
    {
      title: "Прошутто-руккола",
      descriptions: "Сыровяленый окорок прошутто, свежая руккола и пармезан",
      price: "680",
      imageUrl:
        "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=600",
    },
    {
      title: "Лосось",
      descriptions: "Слабосолёный лосось, сливочный сыр, укроп и каперсы",
      price: "750",
      imageUrl:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    },
    {
      title: "Кальцоне",
      descriptions: "Закрытая пицца с ветчиной, грибами и моцареллой",
      price: "550",
      imageUrl:
        "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=600",
    },
    {
      title: "Четыре сезона",
      descriptions:
        "Грибы, артишоки, ветчина и оливки — по сектору на каждый вкус",
      price: "640",
      imageUrl:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600",
    },
    {
      title: "Сырная с чесноком",
      descriptions: "Моцарелла, чеддер, чесночное масло и орегано",
      price: "500",
      imageUrl:
        "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600",
    },
  ];

  return (
    <div className="wrapper">
      <Header links={links} />
      {/* <MainBlock /> */}
      <PizzaCards pizza_data={pizza_data}/>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
