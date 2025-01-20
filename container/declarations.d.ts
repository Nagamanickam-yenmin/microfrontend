declare module 'Components/Button' {
  import React from 'react';
  export type ButtonProps = {
    name: string;
    className?: string; 
  };
  const Button: React.FC<ButtonProps>;
  export default Button;
}

declare module 'Components/UseAuth' 

declare module 'Components/Store'


declare module 'Login/Auth' {
  const Auth: React.ComponentType;
  export default Auth;
}

declare module 'Rewards/Rewards' {
  const Rewards: React.ComponentType;
  export default Rewards;
}
declare module 'Landlord/Landlord' {
  const Rewards: React.ComponentType;
  export default Rewards;
}
declare module 'Payments/Payments' {
  const Payments: React.ComponentType;
  export default Payments;
}

interface NodeModule {
  hot?: {
    accept(path: string, callback: () => void): void;
  };
}
