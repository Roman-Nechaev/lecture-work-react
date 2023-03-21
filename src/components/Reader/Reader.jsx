import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    index: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  }

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentItem = items[index];
    return (
      <div>
        <Controls
          current={index + 1} // передаем позицию элемента
          total={totalItems} // передаем дину массива
          onChange={this.changeIndex} // предаем метод изменения элемента по индексу
        />
        <Progress current={index + 1} total={totalItems} />

        <Publication item={currentItem} />
      </div>
    );
  }
}
