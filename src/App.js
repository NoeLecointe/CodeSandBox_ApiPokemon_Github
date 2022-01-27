import "./styles.css";
import ListePokemons from "./components/ListePokemons.js";
import FormNb from "./components/FormNb.js";

import React from "react";

class App extends React.Component {
  state = { nb: 0 };

  handlernb = (nb) => {
    this.setState({ nb: nb });
  };

  render() {
    console.log(this.state.nb);
    return (
      <div className="App">
        <h1>Pokémon</h1>
        <h3>Mon premier commit</h3>
        {/* <CardPokemon idPokemon={1}></CardPokemon> */}
        <FormNb handler={this.handlernb}></FormNb>
        <ListePokemons nb={this.state.nb}></ListePokemons>
      </div>
    );
  }
}
export default App;
