 
 
import './App.css';
import Header from './components/Header/Header';
 
import Writers from './components/Writers/Writers';

function App() {
 
  return (
    <div className="App">
      {/* calling Header component  */}
       <Header></Header>
       {/* calling Writers component */}
      <Writers></Writers>
    </div>
  );
}

export default App;
