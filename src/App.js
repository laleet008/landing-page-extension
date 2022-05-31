import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;
