import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { getRandomItem as getRandomItemFromUtils } from "./utils/trie_data";
import ItemDisplay from "./components/ItemDisplay";
import Nav from "./components/Nav";

function App() {
  const [data, setData] = useState([]);
  const [randomItem, setRandomItem] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) =>
        console.error("Erreur lors du chargement des données:", error)
      );
  }, []);

  const handleGetRandomItem = () => {
    if (data.length > 0) {
      const randomItem = getRandomItemFromUtils(data);
      setRandomItem(randomItem);
    }
  };

  return (
    <>
      <Nav />
      <Header />
      <MainContent />
      <button onClick={handleGetRandomItem}>Get Random Item</button>
      {randomItem && <ItemDisplay item={randomItem} />}
      <Footer />
    </>
  );
}

export default App;
