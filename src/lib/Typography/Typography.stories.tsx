import Typography, { TYPOGRAPHY_VARIANTS } from "./Typography";
import { LEVELS } from "./constants";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

const meta: ComponentMeta<typeof Typography> = {
  title: "Design System/Typography",
  component: Typography,
};

export default meta;

export const Default: ComponentStoryObj<typeof Typography> = {
  args: {
    children: "Headline",
  },
  argTypes: {
    variant: {
      options: TYPOGRAPHY_VARIANTS,
      control: {
        type: "radio",
      },
    },
    level: {
      options: LEVELS,
      control: {
        type: "radio",
      },
    },
  },
};
