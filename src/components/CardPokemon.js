import { CardMedia, CardContent, Typography, Card } from "@material-ui/core";
import React from "react";

class CardPokemon extends React.Component {
  state = {};
  render() {
    return (
      <Card style={{ width: "150px" }}>
        <CardMedia style={{ height: "150px" }} image={this.state.img} />
        <CardContent>
          <Typography variant="h5" component="h2">
            {this.state.nom}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  componentDidMount() {
    this.getPokemon(this.props.idPokemon);
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.state === prevState && this.props !== prevProps) {
      this.getPokemon(this.props.idPokemon);
    }
  }

  getPokemon(idPokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
    let fetchOptions = {};

    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        this.setState({
          img: dataJSON.sprites.front_default,
          nom: dataJSON.name
        });
      })

      .catch((error) => {
        console.log(error);
      });
  }
}
export default CardPokemon;
