import React from "react";
import Button from "./src/stories/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary Button",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  children: "Text Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Red = Template.bind({});
Red.args = {
  color: "red",
};

export const Blue = Template.bind({});
Blue.args = {
  color: "blue",
};

export const Green = Template.bind({});
Green.args = {
  color: "green",
};
