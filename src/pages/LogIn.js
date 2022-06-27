import React from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../utils/firebase';

const LogIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>
        Sign in with google Popup
      </button>
    </div>
  );
};

export default LogIn;
