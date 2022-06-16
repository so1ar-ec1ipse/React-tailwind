import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import cntl from "cntl";
import { BRAND_GREEN } from "../../../constants";

const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "transparent",
    fontWeight: 600,
    height: "2.88em",
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: "0.875rem",
    opacity: 0.7,
    fontWeight: 400,
    fontStyle: "italic",
    color: "white",
  }),
  menu: (base) => ({
    ...base,
    borderColor: "rgba(166, 166, 166, var(--tw-border-opacity))",
    borderWidth: "1px",
  }),
};

const customTheme = (base) => ({
  ...base,
  colors: {
    ...base.colors,
    primary: BRAND_GREEN,
    primary25: BRAND_GREEN.concat("41"),
    primary50: BRAND_GREEN.concat("80"),
    primary75: BRAND_GREEN.concat("c0"),
    neutral0: "black",
    neutral5: "#333333",
    neutral10: "#5c5c5c",
    neutral20: "#7d7d7d",
    neutral30: "#979797",
    neutral40: "#acacac",
    neutral50: "#A6A6A6",
    neutral60: "#cacaca",
    neutral70: "#d5d5d5",
    neutral80: "#dddddd",
    neutral90: "white",
  },
});

const labelCN = cntl`
  mb-2
  text-base
  text-gray-200
`;

const Dropdown = ({
  title,
  className,
  label,
  options,
  placeholder,
  defaultValue,
  value,
  isClearable,
  onChange,
  isDisabled,
  isRequired
}) => (
  <>
    <div className={className}>
      {label && 
        <p className={labelCN}>{label}
        {
          isRequired &&
            <span className="text-brandGreen">*</span>
        }</p>
      }
      <Select
        theme={customTheme}
        styles={customStyles}
        isClearable={isClearable}
        options={options}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={(val) => onChange({ label: val?.label, value: val?.value })}
        isDisabled={isDisabled}
        maxMenuHeight={250}
      />
    </div>
  </>
);

const optionPropType = PropTypes.shape({
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
});
Dropdown.propTypes = {
  /**
   * classes to apply to the container div
   */
  className: PropTypes.string,
  /**
   * the options that will be displayed in the dropdown (label, value pairs)
   */
  options: PropTypes.arrayOf(optionPropType),
  /**
   * the string to display above the dropdown
   */
  label: PropTypes.string,
  /**
   * string that acts as the placeholder and the "null" option
   */
  placeholder: PropTypes.string,
  /**
   * value to display on the initial load
   */
  defaultValue: PropTypes.shape(optionPropType),
  /**
   * controls the value in the dropdown
   */
  value: optionPropType,
  /**
   * toggles whether the field presents UI to clear it
   */
  isClearable: PropTypes.bool,
  /**
   * function called when a selection is changed, provides the selection
   */
  onChange: PropTypes.func,
  /**
   * disables the dropdown
   */
  isDisabled: PropTypes.bool,
};

Dropdown.defaultProps = {
  className: null,
  options: [],
  label: null,
  placeholder: "Select an option...",
  defaultValue: null,
  value: null,
  isClearable: true,
  onChange: null,
  isDisabled: false,
};

export default Dropdown;
