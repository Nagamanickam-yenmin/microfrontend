import React from "react";
import ButtonProps from "../../type/buttonType";

const Button: React.FC<ButtonProps> = ({
  name,
  className = "primayBtn",
  onClick = () => console.log("Button clicked"),
}) => {
  return (
    <div className={className} onClick={onClick}>
      {name}
    </div>
  );
};

export default Button;
