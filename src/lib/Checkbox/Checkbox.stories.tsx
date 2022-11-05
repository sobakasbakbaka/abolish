import { ComponentMeta, ComponentStoryObj, Story } from "@storybook/react";
import Checkbox, { Props } from "./Checkbox";
import { useEffect, useState } from "react";

const meta: ComponentMeta<typeof Checkbox> = {
  title: "Design System/Checkbox",
  component: Checkbox,
  args: {
    checked: true,
    label: 'Label'
  },
};

export default meta;

export const Default: Story<Props> = (args) => {
  const [checked, setChecked] = useState(args.checked);

  useEffect(() => setChecked(args.checked), [args.checked]);

  const handleChange = () => setChecked((prevState) => !prevState);

  return <Checkbox checked={checked} onChange={handleChange} label={args.label} />;
};
