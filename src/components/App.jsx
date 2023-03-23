import { Component } from 'react';

import { fetchBreeds, fetchDogByBreed } from 'api';
import { Dog } from './Dog';
import { BreedSelect } from './BreedSelect';

import { GlobalStyle } from '../components/GlobalStyle';

export class App extends Component {
  state = {
    breeds: [],
    dog: null,
    error: null,
  };

  async componentDidMount() {
    try {
      const breeds = await fetchBreeds();

      this.setState({ breeds: breeds });
    } catch (error) {
      this.setState({ error: 'Упс, что-то пошло не так!' });
    }
  }

  selectBreed = async (option) => {
    try {
      const dog = await fetchDogByBreed(option.value);

      this.setState({ dog });
    } catch (error) {
      console.log(error);
      this.setState({ error: 'Упс, что-то пошло не так!' });
    }
  };

  render() {
    const { breeds, dog, error } = this.state;
    return (
      <>
        <GlobalStyle />
        <BreedSelect breeds={breeds} onSelect={this.selectBreed} />
        {error && <div>{error}</div>}
        {dog && <Dog dog={dog} />}
      </>
    );
  }
}
