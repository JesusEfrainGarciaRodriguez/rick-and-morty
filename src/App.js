import './App.css';

//Views
import Home from "./views/Home"

//Providers
import CharacterProvider from './context/characters/Provider';

function App() {
  return (
    <CharacterProvider>
      <Home/>
    </CharacterProvider>
  );
}

export default App;
