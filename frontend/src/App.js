import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AnalyticsListener from "@/AnalyticsListener";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnalyticsListener />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
