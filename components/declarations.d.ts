declare module 'Login/Auth' {
  const Auth: React.ComponentType;
  export default Auth;
}
declare module 'Components/UseAuth' {
  const useAuth: () => boolean;
  export default useAuth;
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
