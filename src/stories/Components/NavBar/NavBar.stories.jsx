import React from "react";
import NavBar from "./NavBar";

export default {
  title: "NavBar",
  component: NavBar,
  decorators: [
    (Story) => (
      <div className="bg-white h-screen p-2">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
