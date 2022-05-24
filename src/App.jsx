import { useState, useEffect, createContext } from "react";
import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://gitconnected.com/v1/portfolio/tpcbank").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <DataContext.Provider value={data}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </DataContext.Provider>
  );
}

export default App;
