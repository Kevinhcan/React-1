import { useState } from "react";
import "./App.css";
import frases from "./frases/frases.json";
import Components from "./components/Components";

function App() {
  const randomItem = (listItems) => {
    const randomIndex = Math.floor(Math.random() * listItems.length);
    return listItems[randomIndex];
  };

  const images = ["img1", "img2", "img3", "img4"]
  const [quote, setQuote] = useState(randomItem(frases));
  const [image, setImage] = useState(randomItem(images));
  

  const newQuote = () => {
    setQuote(randomItem(frases));
    setImage(randomItem(images))

  };

  return (
    <div className={`App ${image}`}>
      <Components quote={quote} newQuote={newQuote} />


    </div>
  );
}

export default App;
