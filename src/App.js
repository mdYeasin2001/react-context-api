import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { createContext, useState } from 'react';

export const countContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <countContext.Provider value={[count, setCount]}>
      <Home/>
      <About/>
      <Contact/>
    </countContext.Provider>
  );
}

export default App;
