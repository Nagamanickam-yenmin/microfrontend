declare module 'Components/Button' {
  import React from 'react';
  export type ButtonProps = {
    name: string;
    className?: string; 
  };
  const Button: React.FC<ButtonProps>;
  export default Button;
}

declare module 'Components/AxiosService' 
declare module 'Components/Store' 
// declare module 'Components/Button' {
//   const Button: React.ComponentType;
//   export default Button;
// }

// declare module 'Components/Button' {
//   const Button: React.ComponentType;
//   export default Button;
// }