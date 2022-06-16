import React from "react";
import PropTypes from "prop-types";
import "./Input.css";
import cntl from "cntl";
import CrossButton from "../CrossButton/CrossButton";
const containerCN = (className) => cntl`
  min-w-0
  ${className}
`;

const inputContainerCN = (isShowingClear, isRequired) => cntl`
  flex
  flex-1
  min-w-0
  border
  rounded
  ${isShowingClear ? "pr-3" : ""}
`;
// ${isRequired ? "border-brandRed" : "border-gray-200"}

const inputCN = ({ hasIcon, isTextarea }) => cntl`
  ESInput
  bg-black
  font-semibold
  text-sm
  text-gray-100
  placeholder-white
  p-2
  flex-1
  min-w-0
  ${hasIcon ? cntl`pl-8` : null}
  ${isTextarea ? cntl`h-32` : cntl`h-11`}
`;

const labelCN = cntl`
  flex
  mb-2
  text-base
  text-gray-200
`;

const Input = ({
  placeholder,
  label,
  icon,
  className,
  onChange,
  onKeyPress,
  value,
  isTextarea,
  type,
  disableClear,
  isRequired,
}) => {
  const onInputChange = ({ target: { value: newValue } }) => {
    onChange(newValue);
  };

  const onClearClick = () => {
    onChange("");
  };

  const CustomTag = `${isTextarea ? "textarea" : "input"}`;

  return (
    <div className={containerCN(className)}>
      {label && (
        <div className={labelCN}>
          <p>{label}</p>
          {isRequired && (
            <>
              <p className="text-brandGreen text-sm">*</p>
              {/* <p className="text-brandRed italic ml-2">Required</p> */}
            </>
          )}
        </div>
      )}
      <div
        className={inputContainerCN(
          value.length > 0 && !disableClear,
          value.length === 0 && isRequired
        )}
      >
        <CustomTag
          style={{ background: `url(${icon}) no-repeat 10px 13px`, backgroundSize: `auto 50%`}}
          className={inputCN({ hasIcon: !!icon, isTextarea })}
          placeholder={placeholder}
          type={type}
          onChange={onInputChange}
          value={value}
          onKeyPress={onKeyPress}
        />
        {value.length > 0 && !disableClear && (
          <CrossButton className="w-3" onClick={onClearClick} isGrey />
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  /**
   * text that appears in the textbox when no user-entered text is preset
   */
  placeholder: PropTypes.string,
  /**
   * text that appears above the input box
   */
  label: PropTypes.string,
  /**
   * any CSS classes to apply to the container
   */
  className: PropTypes.string,
  /**
   * function called when the input value changes, provides the input value
   */
  onChange: PropTypes.func,
  /**
   * function called when a key is pressed
   */
  onKeyPress: PropTypes.func,
  /**
   * applies this value to the input
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * url to an image to display on the left side of the input
   */
  icon: PropTypes.string,
  /**
   * if true, sets the html tag to textarea
   */
  isTextarea: PropTypes.bool,
  /**
   * the input type
   */
  type: PropTypes.string,
  /**
   * if true, prevents X from appearing for resetting the value to an empty string
   */
  disableClear: PropTypes.bool,
  /**
   * if true, adds the UI to show that the input is required
   */
  isRequired: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: undefined,
  label: undefined,
  className: undefined,
  onChange: null,
  onKeyPress: null,
  value: "",
  icon: null,
  isTextarea: false,
  type: undefined,
  disableClear: false,
  isRequired: false,
};

export default Input;
