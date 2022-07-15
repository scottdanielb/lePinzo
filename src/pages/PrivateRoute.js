import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { UserContext } from '../context/user_context';

// ...rest
const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  // return (
  //   <Route
  //     {...rest}
  //     render={() => {
  //       return currentUser ? children : <Redirect to='/'></Redirect>;
  //     }}
  //   ></Route>
  // );
  if (!currentUser) {
    return <Navigate to='/' />;
  }
  return children;
};
export default PrivateRoute;
