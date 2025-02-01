declare module "Components/Input" {
    import React from "react";
  
    export type InputProps = {
      field: {
        fieldName: string;
        type?: string;
      };      
      onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    };
  
    const Input: React.FC<InputProps>;
    export default Input;
  }
// Declaring SCSS file imported from the Components project
declare module 'Components/Style'     

  