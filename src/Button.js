/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const {
    buttonType,
    buttonPosition,
    onClick,
    onMouseOver,
    onMouseOut,
    children,
    style,
  } = props;

  return (
    <div
      role="button"
      tabIndex="0"
      className={`OperationButton ${buttonType} ${buttonPosition}`}
      onClick={onClick}
      style={style}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onKeyDown={() => {}}
    >
      {children}
    </div>
  );
};

Button.propTypes = {
  buttonPosition: PropTypes.string,
  buttonType: PropTypes.string,
  style: PropTypes.shape(),
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.element,
};

Button.defaultProps = {
  buttonPosition: "falseButtonPosition",
  buttonType: "falseButtonType",
  style: {},
  onMouseOver: () => {},
  onMouseOut: () => {},
  onClick: () => {},
  children: {},
};

export default Button;
