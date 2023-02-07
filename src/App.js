import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import Start from "./Components/Start/Start";
import Scene from "./Components/Scene/Scene";
import System from "./Components/System/System";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/galaxy" element={<Scene />} />
        <Route path="/system/:slug" element={<System />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
