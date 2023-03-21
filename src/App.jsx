import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from './components/PokemonForm';
import PokemonInfo from './components/PokemonInfo';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    pokemonName: '',
  };

  hendleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
    // console.log(pokemonName);
  };
  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.hendleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
