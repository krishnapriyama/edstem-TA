import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import SurveyScreen from "./components/surveyScreen";
import Table from "./components/table";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SurveyScreen />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
