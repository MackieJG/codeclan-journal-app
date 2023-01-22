import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import './App.css';
import Home from "./Components/Home";
import JournalForm from './Components/JournalForm';
import JournalList from './Components/JournalList';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<JournalForm />} />
        <Route path='/journal' element={<JournalList />} />
      </Routes>
    </Router>
  );
}

export default App;