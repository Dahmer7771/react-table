import React, {Component} from 'react';
import './App.css';
import GoodTable from './GoodTable';

class App extends Component {
  state = {
    tableProps: [
      {width: 4, height: 4, className: 'GoodTable'}
    ]
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tableProps.map((tableProps, index) => {
          return (
            <GoodTable key={index} className={tableProps.className} initialWidth={tableProps.width} initialHeight={tableProps.height}></GoodTable>
          )
        })}
      </React.Fragment>
    )
  }
}

export default App;
