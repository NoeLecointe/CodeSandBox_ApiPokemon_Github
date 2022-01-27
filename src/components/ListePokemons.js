import React from "react";
import CardPokemon from "./CardPokemon.js";
// import Grid from "@material-ui/core";

class ListePokemon extends React.Component {
  state = { liste: [] };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      let tab = [];
      for (let i = 1; i <= this.props.nb; i++) {
        tab.push(i);
      }
      this.setState({ liste: tab });
    }
  }

  render() {
    console.log(this.state.liste);
    return (
      <div>
        <h2> pokemon </h2>
        {/* <Grid container spacing={3}> */}
        {this.state.liste.map((v) => {
          return (
            // <Grid item key={v}>
            <CardPokemon idPokemon={v}></CardPokemon>
            //</Grid>
          );
        })}
        {/* //</Grid> */}
      </div>
    );
  }
}

export default ListePokemon;
