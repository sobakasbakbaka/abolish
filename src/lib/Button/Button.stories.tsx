import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Button, { BUTTONS_VARIANT } from "./Button";

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
      options: BUTTONS_VARIANT,
      control: {
        type: "radio",
      },
    },
  },
};
