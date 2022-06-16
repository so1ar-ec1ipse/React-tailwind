import React from "react";
import ProgressTracker from "./ProgressTracker";

export default {
  title: "ProgressTracker",
  component: ProgressTracker,
  args: {
    steps: Array(10)
      .fill()
      .map((v, i) => `Step ${i + 1}`),
  },
};

const Template = (args) => <ProgressTracker {...args} />;
export const Default = Template.bind({});
