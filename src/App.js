import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InfoPage from './pages/InfoPage';
import Navbar from './components/Navbar';
import GamePage from './pages/GamePage';

function App() {

  const [dimension, setDimension] = useState(10);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/info' element={(<InfoPage dimension={dimension} setDimension={val => {
          if (val > 0 && val % 2 === 0) {
            setDimension(val);
          } else {
            alert('Dimension must be an even number greater than 0')
          }
        }} />)} />
        <Route path='/' element={(<GamePage dimension={dimension} />)} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
