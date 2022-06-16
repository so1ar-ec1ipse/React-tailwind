import React from "react";
import PropTypes from "prop-types";
import cntl from "cntl";
import Spinner from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const buttonCN = ({ className, typedClassNames }) => cntl`
  flex
  justify-center
  py-3
  px-6
  text-sm
  active:opacity-25
  rounded
  font-semibold
  ${typedClassNames}
  ${className}
`;

const getTypedClassNames = (secondary, tertiary, destructive, disabled) => {
  if (disabled) {
    return "bg-gray-500 text-white";
  }
  if (destructive) {
    return "bg-brandRed text-white";
  }
  if (secondary) {
    return "bg-white text-black";
  }
  if (tertiary) {
    return "";
  }
  return "bg-brandGreen";
};

const LOADING_ICON_SIZE = 20;

const Button = ({
  title,
  onClick,
  className,
  secondary,
  tertiary,
  destructive,
  isLoading,
  disabled,
  iconLeft,
}) => {
  return (
    <button
      type="button"
      className={buttonCN({
        className,
        typedClassNames: getTypedClassNames(
          secondary,
          tertiary,
          destructive,
          disabled
        ),
      })}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <Spinner
          type="Puff"
          color={secondary ? "black" : "white"}
          height={LOADING_ICON_SIZE}
          width={LOADING_ICON_SIZE}
        />
      ) : (
        <div className="flex w-full h-full justify-center items-center">
          {iconLeft && <div className="mr-1">{iconLeft}</div>}
          <p className="text-base capitalize">{title}</p>
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  /**
   * the text to show in the button
   */
  title: PropTypes.string.isRequired,
  /**
   * the handler called when the button is clicked
   */
  onClick: PropTypes.func.isRequired,
  /**
   * any CSS classes to apply to the container
   */
  className: PropTypes.string,
  /**
   * if true applies secondary styles (white bg, black text)
   */
  secondary: PropTypes.bool,
  /**
   * if true applies tertiary styles (black bg, white text)
   */
  tertiary: PropTypes.bool,
  /**
   * if true applies destructive styles (red bg, white text)
   */
  destructive: PropTypes.bool,
  /**
   * shows a spinner if true
   */
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  /**
   * JSX to display on the left side of the button
   */
  iconLeft: PropTypes.element,
};

Button.defaultProps = {
  className: null,
  secondary: false,
  tertiary: false,
  destructive: false,
  isLoading: false,
  disabled: false,
  iconLeft: undefined,
};

export default Button;
