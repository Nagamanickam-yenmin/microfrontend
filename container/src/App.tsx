import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './layout';
import './assets/scss/app.scss';
import { Provider } from 'react-redux';
// import store from 'Components/Store';

const Login = React.lazy(() => import('Login/Auth'));
// const Rewards = React.lazy(() => import('Rewards/Rewards'));
// const Landlord = React.lazy(() => import('Landlord/Landlord'));
// const Payments = React.lazy(() => import('Payments/Payments'));
// const useAuth  = React.lazy(() => import('Components/UseAuth'));


export default function App() {
  const layout = location.pathname === '/login';
  // const useLogin = useAuth();

  // console.log(useLogin,"useLogin")
  return (
    // <Provider store={store}>
    <Layout showLayout={true}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" component={Login} /> 
            {/* <Route path="/login" component={Login} /> */}
            {/* <Route path="/rewards" component={Rewards} /> */}
            {/* <Route path="/landlord" component={Landlord} /> */}
            {/* <Route path="/payment" component={Payments} /> */}  
          </Switch>
        </Suspense>
      </Router>
    </Layout>
    //  </Provider>
  );
}
