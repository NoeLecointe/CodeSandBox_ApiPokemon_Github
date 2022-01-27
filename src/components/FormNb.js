import React from "react";
import TextField from "@material-ui/core/TextField";

class FormNb extends React.Component {
  state = { texte: "" };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.texte !== " ") {
      this.props.handler(this.state.texte);
      this.setState({ texte: " " });
    }
  };

  handleChange = (event) => {
    this.setState({ texte: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          variant="outlined"
          fullWidth
          label="Nombre de pokémons"
          value={this.state.texte}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default FormNb;
