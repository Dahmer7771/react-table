/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const {
            buttonType,
            buttonPosition,
            onClick,
            onMouseOver,
            onMouseOut,
            children,
            style,
        } = this.props;

        return (
            <div
              role="button"
              tabIndex="0"
              className={`OperationButton ${buttonType} ${buttonPosition}`}
              onClick={onClick}
              style={style}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
            >
                {children}
            </div>
        );
    }
}

Button.propTypes = {
    buttonPosition: PropTypes.string,
    buttonType: PropTypes.string,
    style: PropTypes.node,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    onClick: PropTypes.func,
    children: PropTypes.node,
};

export default Button;
