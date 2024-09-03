import React from "react";
import InputGroup from "./InputGroup";

export default {
  title: "components/InputGroup",
  component: InputGroup,
  argTypes: {
    state: {
      control: {
        type: "select",
        options: [
          "default",
          "hover",
          "focus",
          "error",
          "error-focus",
          "disabled",
        ],
      },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

const Template = (args) => <InputGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Email",
  id: "email",
  value: "",
  placeholder: "Input .. ",
  annotationText: "This is a hint to help user",
  state: "default",
  size: "medium",
  onChange: (e) => console.log(e.target.value),
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
  state: "hover",
  annotationText: "This is a hint to help user",
};

export const Focus = Template.bind({});
Focus.args = {
  ...Default.args,
  state: "focus",
  annotationText: "This is a hint to help user",
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  ...Default.args,
  state: "error",
  annotationText: "This is a hint to help user",
};

export const ErrorFocus = Template.bind({});
ErrorFocus.args = {
  ...Default.args,
  state: "error-focus",
  annotationText: "This is a hint to help user",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  state: "disabled",
  annotationText: "This is a hint to help user",
};
