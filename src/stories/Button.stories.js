import React from "react";
import Button from "./Button";

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
  children: "Text",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Small Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  children: "Medium Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Large Button",
};

export const Red = Template.bind({});
Red.args = {
  color: "red",
  children: "Red Button",
};

export const Blue = Template.bind({});
Blue.args = {
  color: "blue",
  children: "Blue Button",
};

export const Green = Template.bind({});
Green.args = {
  color: "green",
  children: "Green Button",
};
