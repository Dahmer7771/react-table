import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    constructor (props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return(
            <div className={`OperationButton ${this.props.buttonType} ${this.props.buttonPosition}`}
                onClick={this.props.onClick}
                style={this.props.style}
                onMouseOver={this.props.onMouseOver}
                onMouseOut={this.props.onMouseOut}>
                {this.props.children}
            </div>
        );
    }
}

Button.propTypes = {
    buttonPosition: PropTypes.string,
    buttonType: PropTypes.string,
    style: PropTypes.object,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    onClick: PropTypes.func
};

export default Button;