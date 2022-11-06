import { Meta, Story } from "@storybook/react";
import Field, { Props } from "./Field";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

const meta: Meta<Props> = {
  title: "Design System/Field",
  component: Field,
  args: {
    value: "",
  },
};

export default meta;

export const Default: Story<Props> = (args) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => setValue(args.value), [args.value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Field
      value={value}
      onChange={handleChange}
      postfixButtonProps={{
        onClick: () => console.log("click"),
        children: "Adopt now",
      }}
    />
  );
};
