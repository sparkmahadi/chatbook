import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ChatState } from './../context/ChatProvider';

const PrivateRoute = ({ children }) => {
    const { user } = ChatState();

    // if (loading) {
    //     return <div>loading</div>
    // }
    console.log(user);
    if(!user){
        // return <Navigate to='/'></Navigate>
      }
    return children;
};

export default PrivateRoute;