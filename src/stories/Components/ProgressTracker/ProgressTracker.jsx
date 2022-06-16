import React, { Fragment } from "react";
import PropTypes from "prop-types";
import cntl from "cntl";

const navContainerCN = cntl`
  flex 
  justify-between 
  items-center 
  w-2/3 
  mt-8 
  mb-14 
  ml-12 
  relative
`;

const navItemCN = (selected, active) => cntl`
  relative
  z-10
  text-xs 
  text-gray-200 
  font-semibold
  uppercase 
  text-center
  ${selected ? "text-brandGreen" : ""}
  ${active ? "group" : ""}
`;

const navItemDotCN = (selected) => cntl`
  progress-dot
  block
  rounded-full 
  ${selected ? "selected-dot" : ""}
  ${selected ? "bg-white" : "bg-brandGreen"}
  transition
  duration-300
  ease-in-out
  group-hover:bg-darkenedGreen
`;

const navItemNameCN = cntl`
  absolute
  left-1/2
  transform
  -translate-x-2/4
  top-7
  whitespace-nowrap
`;

const hitAreaCN = cntl`
  absolute
  bottom-0
  left-0 
  w-full
  h-14
`;

const trackCN = cntl`
  absolute 
  w-full 
  h-0.5 
  bg-gray-100
`;

const progressMeterCN = (widthClass) => cntl`
  absolute 
  z-0
  h-0.5 
  bg-brandGreen
  ${widthClass}
`;

const ProgressTracker = ({ steps, selectedIndex, onStepClick}) => {
  const getProgress = (index, isSelected) => {
    // we only want to show the meter if this item is selected
    // and it's not the first item
    if (!isSelected || index === 0) return "";

    if (index + 1 === steps.length) {
      return `w-full`;
    }

    return `w-${index}/${steps.length}`;
  };

  const getNavItem = (name, index) => (
    <>
      <i className={navItemDotCN(index === selectedIndex)} aria-hidden="true">
        &nbsp;
      </i>
      <div className={navItemNameCN}>
        {name}
        <div className={hitAreaCN} aria-hidden="true">
          &nbsp;
        </div>
      </div>
    </>
  );

  return (
    <nav className={navContainerCN}>
      <div className={trackCN} aria-hidden="true">
        &nbsp;
      </div>
      {steps.map((name, index) => (
        <Fragment key={name}>
          {index === selectedIndex ? (
            <span className={navItemCN(index === selectedIndex, true)}>
              {getNavItem(name, index)}
            </span>
          ) : (
            <button
              onClick={() => onStepClick(index)}
              className={navItemCN(index === selectedIndex, false)}
              type="button"
            >
              {getNavItem(name, index)}
            </button>
          )}
          <div
            className={progressMeterCN(
              getProgress(index, index === selectedIndex)
            )}
            aria-hidden="true"
          >
            &nbsp;
          </div>
        </Fragment>
      ))}
    </nav>
  );
};

ProgressTracker.propTypes = {
  /**
   * array of strings that represent each step
   */
  steps: PropTypes.arrayOf(PropTypes.string),
  /**
   * the currently active index
   */
  selectedIndex: PropTypes.number,
  /**
   * function called when a step is clicked
   */
  onStepClick: PropTypes.func,
};

ProgressTracker.defaultProps = {
  steps: [],
  selectedIndex: 0,
  onStepClick: undefined,
};

export default ProgressTracker;
