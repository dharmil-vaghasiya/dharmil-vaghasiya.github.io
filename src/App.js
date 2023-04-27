import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import resume from  './lib/resume.json'
import { HomeComponent } from './components/HomeComponent';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent resume={resume}/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
