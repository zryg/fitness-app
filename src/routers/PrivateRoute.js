import React from 'react';
import { connect } from 'react-redux';
import  { Route, Redirect } from 'react-router-dom';
import LoggedInHeader from "../components/LoggedInHeader";

export const PrivateRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <LoggedInHeader />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/home" />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
