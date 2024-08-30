// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const user = localStorage.getItem('user');
//     if (user) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const login = () => setIsAuthenticated(true);
//   const logout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem('user');
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { auth, signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword, googleProvider, facebookProvider, signOut, onAuthStateChanged } from './firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSocialLogin = async (provider) => {
    await signInWithPopup(auth, provider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, handleSocialLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
