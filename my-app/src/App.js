import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/homePage";
import ArraysPage from "./Components/ResourcePages/arraysPage";
import FunctionsPage from "./Components/ResourcePages/functionsPage";
import VariablesPage from "./Components/ResourcePages/variablesPage";
import ArraysQuizPage from "./Components/QuizPages/arraysQuizPage";
import FunctionsQuizPage from "./Components/QuizPages/functionsQuizPage";
import VariablesQuizPage from "./Components/QuizPages/variablesQuizPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/arrays" element={<ArraysPage />} />
      <Route path="/functions" element={<FunctionsPage />} />
      <Route path="/variables" element={<VariablesPage />} />
      <Route path="/quiz-arrays" element={<ArraysQuizPage />} />
      <Route path="/quiz-functions" element={<FunctionsQuizPage />} />
      <Route path="/quiz-variables" element={<VariablesQuizPage />} />
    </Routes>
  );
}

export default App;
