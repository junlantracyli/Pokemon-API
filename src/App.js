import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        // this will return the data from the response object
        //    in a json format
        return response.json()
      })
      .then(response => {
        // store the json converted data in state so it can be displayed
        setPokemon(response.results)
      })
      .catch((err) => {
        console.log(err);
      })
    
    // no clean up statement is required since we are not using resources
    //    that will continue to run
  }, []);
  return (
    <div className="App" style={{ width: "200px", margin: "auto" }}>
      <ul>
        {
          pokemon.map((pokemonCharac, index) => {
            return <li key={index}>{pokemonCharac.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
