import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // If authenticated, render the component; otherwise, redirect to login
  return isAuthenticated ? Component : <Navigate to="/login" />;
};

export default PrivateRoute;
