import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Button, { BUTTON_VARIANTS } from "./Button";

const meta: ComponentMeta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
};

export default meta;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Default",
    isBlock: false,
  },
  argTypes: {
    variant: {
      options: BUTTON_VARIANTS,
      control: {
        type: "radio",
      },
    },
  },
};
