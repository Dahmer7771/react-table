import React, {Component} from 'react';

class GoodTable extends Component {
    state = {
        style: {
            ButtonMinusColumn: {

            },
            ButtonMinusRow: {

            }
        },
        rowsInit: this.props.initialHeight,
        columnsInit: this.props.initialWidth,

        currentRowNum: 0,
        currentColumnNum: 0,

        timerHideButtons: {},
    }

    TableInit = (width, height) => {
        return (
            <tbody>
                {RowsInit(width, height)}
            </tbody>
        )

        function RowsInit(width, height) {
            let rows = [];

            for(let i = 0; i < height; i++) {
                rows.push(
                    <tr key={i}>
                        {CellsInit(width)}
                    </tr>
                )
            }

            return rows;
        }

        function CellsInit(width) {
            let columns = [];

            for(let i = 0; i < width; i++) {
                if(i === 2) columns.push(<td key={i} style={{backgroundColor: 'red'}}></td>)
                else {
                    columns.push(
                    <td key={i}></td>
                )}
            }

            return columns;
        }
    }

    ShowButtons = (MinusColumnOffset, MinusRowOffset) => {
        this.setState({
            style: {
                ButtonMinusColumn: {
                    visibility: 'visible',
                    left: MinusColumnOffset
                },

                ButtonMinusRow: {
                    visibility: 'visible',
                    top: MinusRowOffset
                }
            }
        })
    }

    AddColumn = () => {
        let columns = this.state.columnsInit;

        this.setState({
            columnsInit: columns + 1
        })

    }

    AddRow = () => {
        let rows = this.state.rowsInit;

        this.setState({
            rowsInit: rows + 1
        })

    }

    MinusColumn = () => {
        let currentTable = document.getElementsByClassName(this.props.className)[0];
        let minusColumnBtn = document.getElementsByClassName('BtnTop')[0];

        if(currentTable.rows[0].cells.length !== 1) {
            let rows = currentTable.rows;

            for(let row of rows) {
                row.deleteCell(this.state.currentColumnNum);
            }

            let columns = this.state.columnsInit;
            this.setState({
                columnsInit:  columns - 1
            })

            minusColumnBtn.style.left = currentTable.rows[0].cells[currentTable.rows[0].cells.length - 1].offsetLeft + 'px';

            this.HideMinusButtons();
        }
    }

    MinusRow = () => {
        let currentTable = document.getElementsByClassName(this.props.className)[0];
        let minusRowBtn = document.getElementsByClassName('BtnLeft')[0];

        if(currentTable.rows.length !== 1) {
            currentTable.deleteRow(this.state.currentRowNum);

            let rows = this.state.rowsInit;
            this.setState({
                rowsInit: rows - 1
            })

            minusRowBtn.style.top = currentTable.rows[currentTable.rows.length - 1].offsetTop + 'px';

            this.HideMinusButtons();
        }
    }

    TableOnMouseOverHandler = (event) => {
        let target = event.target;

        if(target.tagName !== 'TD') return;

        this.ShowButtons(target.offsetLeft, target.offsetTop);

        this.setState({
            currentRowNum: target.parentNode.rowIndex,
            currentColumnNum: target.cellIndex
        })

        this.ShowMinusButtons();
    }

    HideMinusButtons = () => {
        this.setState({
            style: {
                ButtonMinusColumn: {
                    visibility: 'hidden'
                },
                ButtonMinusRow: {
                    visibility: 'hidden'
                }
            }
        })
    }

    ShowMinusButtons = () => {
        const currentTable = document.getElementsByClassName(this.props.className)[0];
        const btnMinusColumn = document.getElementsByClassName('BtnTop')[0];
        const btnMinusRow = document.getElementsByClassName('BtnLeft')[0];

        if (currentTable.rows.length !== 1) {
            btnMinusRow.style.visibility = 'visible';
        }
        if (currentTable.rows[0].cells.length !== 1) {
            btnMinusColumn.style.visibility = 'visible';
        }
    }

    render() {
        return (
            <div className="Module">
                <div className="OperationButton ButtonMinus BtnTop" 
                    style={this.state.style.ButtonMinusColumn}
                    onClick={() => this.MinusColumn()}><span>-</span>
                </div>

                <div className="OperationButton ButtonMinus BtnLeft" 
                    style={this.state.style.ButtonMinusRow}
                    onClick={() => this.MinusRow()}><span>-</span>
                </div>

                <div className="OperationButton ButtonPlus BtnBottom" 
                    onClick={() => this.AddRow()} 
                    style={this.state.style}><span>+</span>
                </div>

                <div className="OperationButton ButtonPlus BtnRight" 
                    onClick={() => this.AddColumn()} 
                    style={this.state.style}><span>+</span>
                </div>

                <table className={this.props.className}
                    onMouseOver={this.TableOnMouseOverHandler.bind(this)}>
                        {this.TableInit(this.state.columnsInit, this.state.rowsInit)}
                </table>
            </div>
        )
    }
}

export default GoodTable;