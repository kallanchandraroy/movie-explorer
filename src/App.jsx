import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;