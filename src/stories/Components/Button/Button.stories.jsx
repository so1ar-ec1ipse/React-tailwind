import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  args: {
    title: "Button",
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  secondary: true,
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  tertiary: true,
};

export const Destructive = Template.bind({});

Destructive.args = {
  destructive: true,
};
