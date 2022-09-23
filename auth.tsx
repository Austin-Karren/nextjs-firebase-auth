import React, { useState, useEffect, useContext, createContext } from 'react';
import nookies from 'nookies';
import firebaseClient from './firebaseClient';
import { getAuth } from 'firebase/auth';

type contextProps = {
  user: any;
}

export const AuthContext = createContext<contextProps>({
  user: {}
});

export const AuthProvider = ({children}: {children: any}) => {
  firebaseClient();
  const [user, setUser] = useState({});

  useEffect(() => {
    return getAuth().onIdTokenChanged(async user => {
      if(!user){
        setUser({});
        nookies.set(undefined, 'token', '', {});
        return;
      }
      const token = await user.getIdToken();
      setUser(user);
      nookies.set(undefined, 'token', token, {});
    })
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);