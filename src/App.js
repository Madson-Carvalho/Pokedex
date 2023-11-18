import './App.css';
import './fonts/Pokemon Hollow.ttf'
import './fonts/Pokemon Solid.ttf'
import PokemonPage from './pages/PokemonPage/PokemonPage';
import Home from './pages/home/Home';


function App() {
  return (
    <div className="App">
      <Home />
      <PokemonPage />
    </div>
  );
}

export default App;
