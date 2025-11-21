import Header from "../components/Header";
import { useState } from "react";
export default function About() {
  const [isOn, setIsOn] = useState(true);
  const [tours, setTours] = useState([]);

  // function không Args
  const handleClick = () => {
    const newIsOn = !isOn;
    setIsOn(newIsOn);
  };

  // function có Args
  const handleClickArgs = (isClicked) => {
    setIsOn(isClicked);
  };
  return (
    <div>
      <Header />
      {/* <h1>Giới thiệu</h1> */}
      <button onClick={handleClick} className="bg-blue-500 px-4 rounded-2xl">
        {isOn ? "Bat" : "Tat"}
      </button>
      <button
        onClick={() => handleClickArgs(!isOn)}
        className="bg-blue-500 px-4 rounded-2xl"
      >
        {isOn ? "Bat" : "Tat"}
      </button>
    </div>
  );
}
