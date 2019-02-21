import React, {Component} from 'react';
import './App.css';
import GoodTable from './GoodTable';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GoodTable className='GT1' initialWidth={4} initialHeight={4}></GoodTable>
        <GoodTable className='GT2' initialWidth={4} initialHeight={4}></GoodTable>
      </React.Fragment>
    )
  }
}

export default App;
