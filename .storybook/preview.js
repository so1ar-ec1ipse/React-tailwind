import "../index.css";

import { themes } from "@storybook/theming";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.dark,
  },
};

export const decorators = [
  (Story) => {
    return (
      <DndProvider backend={HTML5Backend}>
        <Story />
      </DndProvider>
    );
  },
];
