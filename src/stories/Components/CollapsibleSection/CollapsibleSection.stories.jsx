import React from "react";
import CollapsibleSection from "./CollapsibleSection";

export default {
  title: "CollapsibleSection",
  component: CollapsibleSection,
  args: {
    title: "cars",
  },
};

const Template = (args) => <CollapsibleSection {...args} />;
export const Default = Template.bind({});
