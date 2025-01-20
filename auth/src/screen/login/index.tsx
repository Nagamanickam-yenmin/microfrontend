import React, { useEffect, useState } from "react";
import { get } from 'Components/AxiosService';
import Button from "Components/Button";

const Login = () => {
  // const [data, setData] = useState(null);

  // const apiHit = async () => {
  //   try {
  //     const response = await get('/example-endpoint');
  //     console.log(response);
  //     // setData(response); // Optionally store data in state
  //   } catch (error) {
  //     console.error('API call failed:', error);
  //   }
  // };

  // Call apiHit only once when the component mounts 
  // useEffect(() => {
    // apiHit();
  // }, []); // Empty dependency array ensures this runs only once when component mounts

  return (
    <>
      <p>Login</p>
      {/* <Button name="submit"/> */}
      {/* <div>{data}</div> Optionally display the data */}
    </>
  );
};

export default Login;
