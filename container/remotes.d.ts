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
declare module 'Auth/Login' {
  const Auth: React.ComponentType;
  export default Auth;
} 

declare module 'Tenant/TenantScreen' {
  const Auth: React.ComponentType;
  export default Auth;
} 

declare module 'Tenant/TenantScreen' {
  const Auth: React.ComponentType;
  export default Auth;
} 

declare module 'Payment/PaymentScreen' {
  const Auth: React.ComponentType;
  export default Auth;
} 
declare module 'Rewards/RewardsScreen' {
  const Auth: React.ComponentType;
  export default Auth;
} 

declare module 'Components/Store' {

  const commonStore: any; // Declare commonStore as a function returning a Store
  export default commonStore;
}