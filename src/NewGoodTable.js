/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

class NewGoodTable extends Component {
  constructor(props) {
    super(props);

    const { initialWidth, initialHeight, cellSize } = props;
    this.state = {
      style: {
        ButtonMinusRow: {
          visibility: "hidden",
          top: "2px",
          width: `${cellSize}px`,
          height: `${cellSize}px`,
        },
        ButtonMinusColumn: {
          visibility: "hidden",
          left: "2px",
          width: `${cellSize}px`,
          height: `${cellSize}px`,
        },
      },

      table: [],

      initialWidth,
      initialHeight,
      cellSize: {
        width: `${cellSize}px`,
        height: `${cellSize}px`,
        minWidth: `${cellSize}px`,
      },

      currentRowNum: 0,
      currentColumnNum: 0,

      timerHideButtons: {},
    };
  }

    componentWillMount = () => {
      const table = [];
      const {
        initialWidth,
        initialHeight,
      } = this.state;

      for (let i = 0; i < initialHeight; i++) {
        const tr = [];
        tr.id = i.toString();

        table.push(tr);
      }

      for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < initialWidth; j++) {
          const td = {};
          td.id = j.toString();

          table[i].push(td);
        }
      }

      this.setState({
        table,
      });
    }

    addRow = () => {
      const { table } = this.state;
      const tr = [];
      tr.id = table.length.toString();
      table.push(tr);

      for (let i = 0; i < table[0].length; i++) {
        const td = {};
        td.id = i.toString();
        table[table.length - 1].push(td);
      }

      this.setState({
        table,
      });
    }

    addColumn = () => {
      const { table } = this.state;
      for (let i = 0; i < table.length; i++) {
        const td = {};
        td.id = table[0].length.toString();
        table[i].push(td);
      }

      this.setState({
        table,
      });
    }

    deleteRow = () => {
      const {
        table,
        currentRowNum,
      } = this.state;

      if (table.length !== 1) {
        table.splice(currentRowNum, 1);

        this.hideMinusButtons();
        this.setState({
          table,
        });
      }
    }

    deleteColumn = () => {
      const {
        table,
        currentColumnNum,
      } = this.state;

      if (table[0].length !== 1) {
        for (let i = 0; i < table.length; i++) {
          table[i].splice(currentColumnNum, 1);
        }

        this.hideMinusButtons();

        this.setState({
          table,
        });
      }
    }

    makeTable = () => {
      const {
        table,
        cellSize,
      } = this.state;

      return (
        <tbody>
          { table.map(row => (
            <tr key={row.id}>
              {row.map(cell => (
                <td key={cell.id} style={cellSize} />
              ))}
            </tr>
              )) }
        </tbody>
      );
    }

    tableOnMouseOverHandler = (event) => {
      const { target } = event;

      this.clearTimerHideButtons();

      if (target.tagName !== "TD") return;

      this.showMinusButtons(target.offsetLeft, target.offsetTop);

      this.setState({
        currentRowNum: target.parentNode.rowIndex,
        currentColumnNum: target.cellIndex,
      });
    }

    hideMinusButtons = () => {
      const {
        ButtonMinusColumn,
        ButtonMinusRow,
      } = this.state;

      this.setState({
        style: {
          ButtonMinusColumn: {
            ...ButtonMinusColumn,
            visibility: "hidden",
          },
          ButtonMinusRow: {
            ...ButtonMinusRow,
            visibility: "hidden",
          },
        },
      });
    }

    showMinusButtons = (minusColumnOffset, minusRowOffset) => {
      const {
        table,
        style,
      } = this.state;
      const rowsInTable = table.length;
      const columnsInTable = table[0].length;
      const {
        style: {
          ButtonMinusRow,
          ButtonMinusColumn,
        },
      } = this.state;

      if (rowsInTable !== 1 && columnsInTable !== 1) {
        this.setState({
          style: {
            ButtonMinusRow: {
              ...ButtonMinusRow,
              visibility: "visible",
              top: minusRowOffset,
            },
            ButtonMinusColumn: {
              ...ButtonMinusColumn,
              visibility: "visible",
              left: minusColumnOffset,
            },
          },
        });
      } else if (rowsInTable !== 1) {
        this.setState({
          style: {
            ...style,
            ButtonMinusRow: {
              ...ButtonMinusRow,
              visibility: "visible",
              top: minusRowOffset,
            },
          },
        });
      } else if (columnsInTable !== 1) {
        this.setState({
          style: {
            ...style,
            ButtonMinusColumn: {
              ...ButtonMinusColumn,
              visibility: "visible",
              left: minusColumnOffset,
            },
          },
        });
      }
    }

    setTimerHideButtons = () => {
      this.setState({
        timerHideButtons: setTimeout(this.hideMinusButtons, 500),
      });
    }

    clearTimerHideButtons = () => {
      const { timerHideButtons } = this.state;

      clearTimeout(timerHideButtons);
    }

    render() {
      const {
        style: {
          ButtonMinusRow,
          ButtonMinusColumn,
        },
        cellSize,
      } = this.state;

      const {
        className,
      } = this.props;

      return (
        <div className="Module">
          <Button
            buttonPosition="BtnTop"
            buttonType="ButtonMinus"
            style={ButtonMinusColumn}
            onMouseOver={() => this.clearTimerHideButtons()}
            onMouseOut={() => this.setTimerHideButtons()}
            onClick={() => this.deleteColumn()}
          >
            <span>-</span>
          </Button>

          <Button
            buttonPosition="BtnLeft"
            buttonType="ButtonMinus"
            style={ButtonMinusRow}
            onMouseOver={() => this.clearTimerHideButtons()}
            onMouseOut={() => this.setTimerHideButtons()}
            onClick={() => this.deleteRow()}
          >
            <span>-</span>
          </Button>

          <Button
            buttonPosition="BtnBottom"
            buttonType="ButtonPlus"
            style={cellSize}
            onClick={() => this.addRow()}
          >
            <span>+</span>
          </Button>

          <Button
            buttonPosition="BtnRight"
            buttonType="ButtonPlus"
            style={cellSize}
            onClick={() => this.addColumn()}
          >
            <span>+</span>
          </Button>

          <table
            className={className}
            onMouseOver={this.tableOnMouseOverHandler.bind(this)}
            onMouseOut={() => this.setTimerHideButtons()}
          >
            {this.makeTable()}
          </table>
        </div>
      );
    }
}

NewGoodTable.propTypes = {
  className: PropTypes.string,
  initialHeight: PropTypes.number,
  initialWidth: PropTypes.number,
  cellSize: PropTypes.number,
};

NewGoodTable.defaultProps = {
  className: "Table_1",
  initialHeight: 4,
  initialWidth: 4,
  cellSize: 50,
};

export default NewGoodTable;
