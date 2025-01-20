import React  from 'react'; 

import Login from './screen/login';  
import { Provider } from 'react-redux';
import store from 'Components/Store';

export default function App() {
  return (
    <> 
    <Provider store={store}>
      <Login />   
    </Provider>
    </>
  );
}
