import "./App.css";
import Home from "./components/home/Home";
import Headphone from "./components/headphones/Headphone";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Speakers from "./components/speakers/Speakers";
import Earphones from "./components/earphones/Earphones";
import Headphone01 from "./components/headphones/Headphone01";
import Headphone02 from "./components/headphones/Headphone02";
import Headphone03 from "./components/headphones/Headphones03";

import Speaker01 from "./components/speakers/Speaker01";
import Speaker02 from "./components/speakers/Speaker02";

import Earphone01 from "./components/earphones/Earphone01";

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
          <Route path="/headphone02" element={<Headphone02 />} />
          <Route path="/headphone03" element={<Headphone03 />} />
          <Route path="/speaker01" element={<Speaker01 />} />
          <Route path="/speaker02" element={<Speaker02 />} />
          <Route path="/earphone01" element={<Earphone01 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
