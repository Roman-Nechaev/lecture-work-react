import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  hendleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  hendleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', tag: '' });
  };

  handleLicenceChange = evt => {
    console.log(evt.currentTarget.checked);
    this.setState({ licence: evt.currentTarget.checked });
  };

  // hendleNameChange = evt => {
  //   this.setState({ name: evt.currentTarget.value });
  // };

  // hendleTagChange = evt => {
  //   this.setState({ tag: evt.currentTarget.value });
  // };

  render() {
    return (
      <form onSubmit={this.hendleSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.hendleChange}
          />
        </label>
        <label htmlFor="">
          Tag
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.hendleChange}
          />
        </label>

        <p>Ваш уровень:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.hendleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.hendleChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.hendleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Согласен с условиями
        </label>
        <br />
        <button type="submit" disabled={!this.state.licence}>
          Отправить
        </button>
      </form>
    );
  }
}

export default Form;
