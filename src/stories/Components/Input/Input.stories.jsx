import React from "react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  args: {
    placeholder: "Placeholder",
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "label",
};

export const TextArea = Template.bind({});

TextArea.args = {
  isTextarea: true,
};

export const Required = Template.bind({});

Required.args = {
  isRequired: true,
  label: "label",
};
