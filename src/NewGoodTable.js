import React, {Component} from 'react';

class NewGoodTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            style: {
                ButtonMinusRow: {
                    visibility: 'hidden',
                    top: '2px',
                    width: this.props.cellSize + 'px',
                    height: this.props.cellSize + 'px'
                },
                ButtonMinusColumn: {
                    visibility: 'hidden',
                    left: '2px',
                    width: this.props.cellSize + 'px',
                    height: this.props.cellSize + 'px'
                }
            },

            table: [],
            
            initialWidth: this.props.initialWidth,
            initialHeight: this.props.initialHeight,
            cellSize : {
                width: this.props.cellSize + 'px',
                height: this.props.cellSize + 'px',
                minWidth: this.props.cellSize + 'px'
            },

            currentRowNum: 0,
            currentColumnNum: 0,

            timerHideButtons: {}
        }
    }

    componentWillMount = () => {
        let table = [];

        for(let i = 0; i < this.state.initialHeight; i++) {
            table.push([]);
        }

        for(let i = 0; i < table.length; i++) {
            for(let j = 0; j < this.state.initialWidth; j++) {
                table[i].push({});
            }
        }

        this.setState({
            table
        })
    }

    addRow = () => {
        let table = this.state.table;
        table.push([]);

        for(let i = 0; i < table[0].length; i++) {
            table[table.length - 1].push({});
        }

        this.setState({
            table
        })
    }

    addColumn = () => {
        let table = this.state.table;

        for(let i = 0; i < table.length; i++) {
            table[i].push({});
        }

        this.setState({
            table
        })
    }

    deleteRow = () => {
        let table = this.state.table;

        if(table.length !== 1) {
            table.splice(this.state.currentRowNum, 1);

            this.hideMinusButtons();
            
            this.setState({
                table
            })

        }
    }

    deleteColumn = () => {
        let table = this.state.table;

        if(table[0].length !== 1) {
            for(let i = 0; i < table.length; i++) {
                table[i].splice(this.state.currentColumnNum, 1);
            }

            this.hideMinusButtons();

            this.setState({
                table
            })
        }
    }

    makeTable = () => {
        return(
            <tbody>
                { this.state.table.map((row, index) => {
                    return(
                        <tr key={index}>
                            {row.map((cell, index) => {
                                return(
                                    <td key={index} style={this.state.cellSize}></td>
                                )
                            })}
                        </tr>
                    )
                }) }
            </tbody>
        )
    }

    tableOnMouseOverHandler = (event) => {
        let target = event.target;

        this.clearTimerHideButtons();

        if(target.tagName !== 'TD') return;

        this.showMinusButtons(target.offsetLeft, target.offsetTop);

        this.setState({
            currentRowNum: target.parentNode.rowIndex,
            currentColumnNum: target.cellIndex
        })
    }

    hideMinusButtons = () => {
        this.setState({
            style: {
                ButtonMinusColumn: {
                    visibility: 'hidden',
                    width: this.props.cellSize + 'px',
                    height: this.props.cellSize + 'px'
                },
                ButtonMinusRow: {
                    visibility: 'hidden',
                    width: this.props.cellSize + 'px',
                    height: this.props.cellSize + 'px'
                }
            }
        })

        // let style = Object.assign({}, this.state.style);
        // style.ButtonMinusColumn.visibility = 'hidden';

        // style.ButtonMinusRow.visibility = 'hidden';

        // console.log(style);

        // this.setState({
        //     style
        // })
    }

    showMinusButtons = (minusColumnOffset, minusRowOffset) => {
        let rowsInTable = this.state.table.length;
        let columnsInTable = this.state.table[0].length;

        if(rowsInTable !== 1 && columnsInTable !== 1) {
            let style = Object.assign({}, this.state.style);

            style.ButtonMinusRow = {
                visibility: 'visible',
                top: minusRowOffset,
                width: this.props.cellSize + 'px',
                height: this.props.cellSize + 'px'
            }

            style.ButtonMinusColumn = {
                visibility: 'visible',
                left: minusColumnOffset,
                width: this.props.cellSize + 'px',
                height: this.props.cellSize + 'px'
            }

            this.setState({
                style
            })
        }

        else if(rowsInTable !== 1) {
            let style = Object.assign({}, this.state.style);

            style.ButtonMinusRow = {
                visibility: 'visible',
                top: minusRowOffset,
                width: this.props.cellSize + 'px',
                height: this.props.cellSize + 'px'
            }

            this.setState({
                style
            })
        }

        else if(columnsInTable !== 1) {
            let style = Object.assign({}, this.state.style);

            style.ButtonMinusColumn = {
                visibility: 'visible',
                left: minusColumnOffset,
                width: this.props.cellSize + 'px',
                height: this.props.cellSize + 'px'
            }

            this.setState({
                style
            })
        }
    }

    setTimerHideButtons = () => {
        this.setState({
            timerHideButtons: setTimeout(this.hideMinusButtons, 500)
        })    
    }

    clearTimerHideButtons = () => {
        clearTimeout(this.state.timerHideButtons);
    }
    
    render() {
        return(
            <div className="Module">
                <div className="OperationButton ButtonMinus BtnTop"
                    style={this.state.style.ButtonMinusColumn}
                    onMouseOver={() => this.clearTimerHideButtons()}
                    onMouseOut={() => this.setTimerHideButtons()}
                    onClick={() => this.deleteColumn()}><span>-</span></div>

                <div className="OperationButton ButtonMinus BtnLeft"
                    style={this.state.style.ButtonMinusRow}
                    onMouseOver={() => this.clearTimerHideButtons()}
                    onMouseOut={() => this.setTimerHideButtons()}
                    onClick={() => this.deleteRow()}><span>-</span></div>

                <div className="OperationButton ButtonPlus BtnBottom"
                    style={this.state.cellSize}
                    onClick={() => this.addRow()}><span>+</span></div>

                <div className="OperationButton ButtonPlus BtnRight"
                    style={this.state.cellSize}
                    onClick={() => this.addColumn()}><span>+</span></div>
                    
                <table className={this.props.className}
                    onMouseOver={this.tableOnMouseOverHandler.bind(this)}
                    onMouseOut={() => this.setTimerHideButtons()}>
                    {this.makeTable()}
                </table>
            </div>
        )
    }
}

export default NewGoodTable;