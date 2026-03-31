import { Suspense, useState } from "react";
import "./App.css";
import AiModels from "./components/AiModels";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Tab from "./components/Tab";
import Cart from "./components/Cart";



const fetchAiModels = async () => {
  const res = await fetch ("/aiModels.json");
  return res.json();
}
//aita bire use korle suspense dite hobe na tobe vitor a use korle suspense korte hobe
// const modelPromise = fetchAiModels();
function App() {
  const [activeTab, setActiveTab] = useState("model");

  const [carts, setCarts] = useState([]);

  // console.log(carts);


  const modelPromise = fetchAiModels();
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Tab setActiveTab={setActiveTab} carts={carts}></Tab>
      <Suspense fallback={<div className="flex items-center justify-center p-50"><span className="loading loading-bars loading-xl"></span></div>}>
          {activeTab === "model" && <AiModels modelPromise = {modelPromise} carts={carts} setCarts={setCarts}></AiModels>}
          {activeTab === "cart" && <Cart carts={carts} setCarts = {setCarts}></Cart>}
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
