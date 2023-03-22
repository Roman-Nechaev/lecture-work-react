import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
import { MaterialList } from './MaterialList/MaterialList';
import * as API from './services/api';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    } finally {
    }
  };

  deleteMaterial = async id => {
    try {
      await API.deleteMaterials(id);
      this.setState(state => ({
        materials: state.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterials = async fields => {
    try {
      const updatedMaterial = await API.updateMaterials(fields);
      this.setState(state => ({
        materials: state.materials.map(material =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    const { isLoading, materials, error } = this.state;
    return (
      <>
        <GlobalStyle />

        {isLoading && <div>Loading...</div>}
        <MaterialEditorForm onSubmit={this.addMaterial} />
        {error && (
          <p>
            Ой! Что-то пошло не так :( Перезагрузите страницу и попробуйте еще
            раз
          </p>
        )}
        {isLoading ? (
          'Загружаем материалы'
        ) : (
          <MaterialList
            items={materials}
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterials}
          />
        )}
      </>
    );
  }
}
