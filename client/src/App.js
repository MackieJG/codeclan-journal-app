
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import JournalContainer from './Containers/JournalContainer'


function App() {
  return (

    <JournalContainer />
    <body>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<JournalForm />} />
          <Route path='/journal' element={<JournalList />} />
        </Routes>
      </Router>
    </body>

  );
}

export default App;