import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ variant, size, color, children, ...props }) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} btn-${color}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "text"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["red", "blue", "green"]),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: "primary",
  size: "medium",
  color: "blue",
};

export default Button;
