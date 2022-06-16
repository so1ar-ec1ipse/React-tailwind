import React from "react";
import PropTypes from "prop-types";
import redCrossIcon from "../../assets/images/crossIcon.png";
import greyCrossIcon from "../../assets/images/greyCrossIcon.svg";

const CrossButton = ({ className, onClick, isGrey }) => (
  <button className={className} type="button" onClick={onClick}>
    <img
      className="w-4 h-4"
      src={isGrey ? greyCrossIcon : redCrossIcon}
      alt="close Icon"
    />
  </button>
);

CrossButton.propTypes = {
  /**
   * classes to apply to the button
   */
  className: PropTypes.string,
  /**
   * function called when the button is clicked
   */
  onClick: PropTypes.func,
  /**
   * if true, the cross button is grey
   */
  isGrey: PropTypes.bool,
};

CrossButton.defaultProps = {
  className: undefined,
  onClick: undefined,
  isGrey: false,
};

export default CrossButton;
