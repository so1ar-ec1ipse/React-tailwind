import React from "react";
import Dropdown from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
  args: {
    options: [
      {
        label: "test1",
        value: "test1",
      },
      {
        label: "test2",
        value: "test2",
      },
      {
        label: "test3",
        value: "test3",
      },
      {
        label: "test4",
        value: "test4",
      },
      {
        label: "test5",
        value: "test5",
      },
    ],
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
