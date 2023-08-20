import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "vodka",
      imageUrl:
        "https://ceylonspirits.lk/wp-content/uploads/2022/04/Absolut-Vodka-Love-Edition-Blue.jpg",
    },
    {
      id: 2,
      title: "whiskey",
      imageUrl:
        "https://ceylonspirits.lk/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/01/Ballantines-Finest-600x703.jpg.webp",
    },
    {
      id: 3,
      title: "wine",
      imageUrl:
        "https://ceylonspirits.lk/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Obikwa-Cabernet-Sauvignon-2.jpg.webp",
    },
    {
      id: 4,
      title: "brandy",
      imageUrl:
        "https://ceylonspirits.lk/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/St-Remy-Brandy-1-600x703.jpg.webp",
    },
    {
      id: 5,
      title: "rum",
      imageUrl:
        "https://ceylonspirits.lk/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Bacardi-Carta-Blanca-Rum-Local-1-600x703.jpg.webp",
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
