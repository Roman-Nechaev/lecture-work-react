import { Component } from 'react';
// import BeatLoader from 'react-spinners/BeatLoader';

import { fetchDogByBreed } from 'api';
import { Dog } from './Dog';
import { BreedSelect } from './BreedSelect';
import { DogSkeleton } from './DogSkeleton';

import { GlobalStyle } from '../components/GlobalStyle';
import { ErrorMessage } from './ErrorMessage';
import { Layout } from './Layout';
import { errorMessages } from '../constants';

export class App extends Component {
  state = {
    dog: null,
    error: null,
    isLoadingDog: false,
  };

  selectBreed = async (option) => {
    try {
      this.setState({ isLoadingDog: true });
      const dog = await fetchDogByBreed(option.value);

      this.setState({ dog });
    } catch (error) {
      console.log(error);
      this.setState({ error: errorMessages.fetchDog });
    } finally {
      this.setState({ isLoadingDog: false });
    }
  };

  render() {
    const { dog, error, isLoadingDog } = this.state;
    return (
      <Layout>
        <BreedSelect onSelect={this.selectBreed} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {isLoadingDog && <DogSkeleton />}
        {dog && !isLoadingDog && <Dog dog={dog} />}
        <GlobalStyle />
      </Layout>
    );
  }
}
