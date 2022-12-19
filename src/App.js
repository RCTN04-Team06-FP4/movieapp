import React, {useState} from 'react';
import NavBar from './components/NavBar';
import Homepage from './pages/Homepage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from './pages/Detail';

function App() {
  const [search, setSearch] = useState("man");
  const searchOnSubmit = (e) => {
    setSearch(e)
  };
  return (
    <div>
      <Router>
        <NavBar searchOnSubmit={searchOnSubmit}/>
        <Routes>
          <Route path="/" element={<Homepage search={search}/>} />
          <Route path="/:id/detail" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
