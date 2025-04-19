import React, { useState } from "react";

const Customer = () => {
  const [customer, setCustomer] = useState({
    name: "John",
    address: { state: "New York", pin: 954111 },
  });
  const handleClick = () => {
    setCustomer({ ...customer, address: { ...customer.address, pin: 912311 } });
  };
  return (
    <div>
      <button onClick={handleClick}>Change Name</button>
      <h1>{customer.name}</h1>
      <h1>{customer.address.state}</h1>
      <h1>{customer.address.pin}</h1>
    </div>
  );
};

export default Customer;
