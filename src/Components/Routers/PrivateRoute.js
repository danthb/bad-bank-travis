
import React/* , { Suspense, lazy } */ from 'react';
import useAuth from '../Auth/useAuth';
import Login from '../Login/login'

import { Route, Redirect } from 'react-router-dom';
export default function PrivateRoute({component: Component, ...rest}) {
   
    /*     const user = { id: 1, username: 'daniel593' }; */
    const auth = useAuth();
    
    return (
        /* <Route exact={props.exact} path={props.path} component={props.component} /> */
        <Route {...rest}>
            {auth.isLogedIn() ? <Component/>
                : (<Redirect to='/login'/>
                
                )}
        </Route> 

        
    );
}
