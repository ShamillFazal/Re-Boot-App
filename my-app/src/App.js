import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/homePage";
import ArraysPage from "./Components/ResourcePages/arraysPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/arrays" element={<ArraysPage />} />
    </Routes>
  );
}

export default App;
