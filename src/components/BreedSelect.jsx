import { Component } from 'react';
import { fetchBreeds } from 'api';
import { ErrorMessage } from './ErrorMessage';
import { errorMessages } from '../constants';

import Select from 'react-select';

export class BreedSelect extends Component {
  state = {
    breeds: [],
    erroe: null,
    isLoading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const breeds = await fetchBreeds();

      this.setState({ breeds });
    } catch (error) {
      this.setState({ error: errorMessages.fetchBreeds });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { breeds, error, isLoading } = this.state;
    const { onSelect } = this.props;

    const options = breeds.map((breed) => ({
      value: breed.id,
      label: breed.name,
    }));

    return (
      <div>
        <Select
          options={options}
          isLoading={isLoading}
          onChange={(option) => onSelect(option.value)}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }
}
