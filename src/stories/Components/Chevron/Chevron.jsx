import React from "react";
import PropTypes from "prop-types";
import cntl from "cntl";

const chevronCN = ({ className }) => cntl`
  flex-initial
  ${className}
  fill-current
`;

const Chevron = ({ className, color }) => (
  <svg
    className={chevronCN({ className })}
    viewBox="0 0 10 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>arrow_right</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="White-Labeling-Dashboard-V1-Copy"
        transform="translate(-994.000000, -908.000000)"
      >
        <g id="arrow_right" transform="translate(975.000000, 892.000000)">
          <g
            id="chevron-right(24x24)@1x-(1)"
            strokeWidth="1"
            transform="translate(20.000000, 16.000000)"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline id="Path" points="0 16 8 8 0 0" />
          </g>
          <rect id="Bounds" fill="#D8D8D8" opacity="0" x="0" y="0" />
        </g>
      </g>
    </g>
  </svg>
);

Chevron.propTypes = {
  /**
   * classes to apply to the chevron container
   */
  className: PropTypes.string,
  /**
   * color of the chevron
   */
  color: PropTypes.string,
};

Chevron.defaultProps = {
  className: "",
  color: "white",
};

export default Chevron;
