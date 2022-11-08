import "./App.css";
import Home from "./components/home/Home";
import Headphone from "./components/headphones/Headphone";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Speakers from "./components/speakers/Speakers";
import Earphones from "./components/earphones/Earphones";
import Headphone01 from "./components/headphones/Headphone01";
import LayoutHeadphone from "./LayoutHeadphone";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="headphone" element={<Headphone />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="earphones" element={<Earphones />} />
          <Route path="/headphone01" element={<Headphone01 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
