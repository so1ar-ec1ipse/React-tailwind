import React from "react";
import Chevron from "./Chevron";

export default {
  title: "Chevron",
  component: Chevron,
  args: {
    className: "w-4",
  },
};

const Template = (args) => <Chevron {...args} />;

export const Default = Template.bind({});

export const Rotated = Template.bind({});

Rotated.args = {
  className: "w-4 transform rotate-180",
};

export const Bigger = Template.bind({});

Bigger.args = {
  className: "w-20",
};
