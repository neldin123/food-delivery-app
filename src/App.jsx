import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./app.css";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="./" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
