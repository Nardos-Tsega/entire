import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="lineup" element={<Menu />} />
        <Route path="nominations" element={<Menu />} />
        <Route path="about-us" element={<Menu />} />
        <Route path="partners" element={<Menu />} />
        <Route path="academic" element={<Menu />} />
        <Route path="contact" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
