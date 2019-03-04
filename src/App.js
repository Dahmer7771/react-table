import React, {Component} from 'react';
import './App.css';
import NewGoodTable from './NewGoodTable';

class App extends Component {
  render() {
    return (
      <NewGoodTable className='GT1' initialHeight={4} initialWidth={4} cellSize={50} />
    )
  }
}

export default App;