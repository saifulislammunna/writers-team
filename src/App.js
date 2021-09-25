 
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  useEffect( () => {
    fetch('./writers.JSON')
    .then(res => res.json())
    .then(data => console.log(data));
  },[])
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
