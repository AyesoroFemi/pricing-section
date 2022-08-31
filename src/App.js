import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const propertiesOne = {
    type: "Free",
    amount: 49,
    bgButton: "white",
    bgText: "#334155",
    text1: "Cras sodales lobortic erat",
    text2: "Vitae pellentesque diam",
    text3: "Consequat eted tempus",
    bgBorder: "#94A3B8",
  };
  const propertiesTwo = {
    type: "Small Business",
    amount: 99,
    bgButton: "white",
    bgText: "#334155",
    text1: "Aliquet diam gravida",
    text2: "phasellus eu condimentur",
    text3: "Metus non venenatis turois",
    bgBorder: "#94A3B8",
  };
  const propertiesThree = {
    type: "Professional",
    amount: 219,
    bgButton: "#34D399",
    bgText: "white",
    text1: "Doner enim nulla malesuada",
    text2: "Sed venenatis vel blandit vel",
    text3: "Duis ultricies scelerisque",
    bgBorder: "#34D399",
  };
  const propertiesFour = {
    type: "Enterprise",
    amount: 419,
    bgButton: "white",
    bgText: "#334155",
    text1: "justo id molestit",
    text2: "Nullam sodales justo fringilli",
    text3: "Donec molestie negue urna",
    bgBorder: "#94A3B8",
  };

  return (
    <div className="bg-[#f1f5f9]">
      <Header />
      <div className="flex mx-4 justify-center mt-20 pb-20">
        <Card {...propertiesOne} />
        <Card {...propertiesTwo} />
        <Card {...propertiesThree} />
        <Card {...propertiesFour} />
      </div>
    </div>
  );
}

export default App;
