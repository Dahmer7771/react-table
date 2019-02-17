import React, {Component} from 'react';

class GoodTable extends Component {
    render() {
        let width = this.props.initialWidth;
        let height = this.props.initialHeight;

        let tableInit = (width, height) => {
            return (
                <tbody>
                    {initRows(height, width)}
                </tbody>
            )

            function initRows(width, height) {
                var rows = [];

                for(let i = 0; i < height; i++) {
                    rows.push(<tr key = {i}>
                        {initCells(width)}
                    </tr>);
                }

                return rows;
            }

            function initCells(width) {
                var cells = [];

                for(let i = 0; i < width; i++) {
                    cells.push(<td key={i}></td>)
                }

                return cells;
            }
        }

        return (
            <div id="Module">
                <div className="OperationButton ButtonMinus BtnTop"><span>-</span></div>
                <div className="OperationButton ButtonMinus BtnLeft"><span>-</span></div>
                <div className="OperationButton ButtonPlus BtnBottom"><span>+</span></div>
                <div className="OperationButton ButtonPlus BtnRight"><span>+</span></div>
                <table className={this.props.className}>
                    {tableInit(width, height)}
                </table>
            </div>
        )
    }
}

export default GoodTable;