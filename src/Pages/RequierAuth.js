import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.git';

const RequierAuth = ({children}) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    if(loading){
        return <button className="btn loading justify-items-center mt-40">loading</button>;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    
      return children;
};

export default RequierAuth;