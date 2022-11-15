import './App.css';
import Home from './Components/Home';
import Second from './Components/Second';
import Charts from './Components/Charts'
import ThirdSection from './Components/Info'
import Gallery from './Components/Gallery'
import Last from './Last';

function App() {
  return (
    <div className="App">
      <Home/>
      <Second/>
      <Charts/>
      <ThirdSection/>
      <Gallery/>
      <Last/>
    </div>
  );
}

export default App;
