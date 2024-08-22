import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});
  const [addressDetails, setAddressDetails] = useState({});
  const [paymentDetails, setPaymentDetails] = useState({});

  return (
    <FormContext.Provider value={{ userDetails, addressDetails, paymentDetails, setUserDetails, setAddressDetails, setPaymentDetails }}>
      {children}
    </FormContext.Provider>
  );
};

