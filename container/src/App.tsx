import React, { Suspense } from 'react';
import './App.css';

// Dynamically import the Login component from the remote container
const Login = React.lazy(() => import('Auth/Login'));
const TenantScreen = React.lazy(() => import('Tenant/TenantScreen'));
const PaymentScreen = React.lazy(() => import('Payment/PaymentScreen'));
const RewardsScreen = React.lazy(() => import('Rewards/RewardsScreen'));
function App() {
  return (
    <div className="App">
      <h1>Welcome to the App</h1>  
        <Login /> 
        <TenantScreen />
        <PaymentScreen />
        <RewardsScreen/>
    </div>
  );
}

export default App;
