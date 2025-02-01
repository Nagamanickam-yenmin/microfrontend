import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Layout from './layout';
import './assets/scss/app.scss';
const Login = React.lazy(() => import('Auth/Login'));
const Tenant = React.lazy(() => import('Tenant/TenantScreen'));
const Payment = React.lazy(() => import('Payment/PaymentScreen'));
const Rewards = React.lazy(() => import('Rewards/RewardsScreen')); 

function App() {
  return (
    <Layout showLayout={true}>
    <Router> 
      <Routes>
      <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Login />} />
        <Route path="/tenant" element={<Tenant />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/rewards" element={<Rewards />} /> 
      </Routes>
    </Router>
    </Layout>
  );
}

export default App;
