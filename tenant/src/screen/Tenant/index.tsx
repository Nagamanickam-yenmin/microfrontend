import React, { useState, useEffect, lazy, Suspense } from "react";

const Input = lazy(() => import("Components/Input"));

const Tenant: React.FC = () => {
  const [data, setData] = useState<string>(""); // Initialize state as an empty string

  const field = {
    fieldName: "Username",
    type: "text",
  };
 

  // Handle input change and update state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  };
  return ( 
    <>
     <Input field={field} onChange={handleChange} /> {/* Pass onChange handler */}
  Tenant Screen
    </>
  );
};

export default Tenant;
