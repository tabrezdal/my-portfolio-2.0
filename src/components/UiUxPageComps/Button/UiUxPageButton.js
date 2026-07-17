import React from "react";
import Button from "../../../sharedComponents/Button/Button";

const UiUxPageButton = ({ url, name }) => (
  <Button
    href={url}
    label={name}
    variant="filled"
    theme="dark"
    size="md"
    target="_blank"
  />
);

export default UiUxPageButton;
