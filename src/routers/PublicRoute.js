import React from 'react';
import { connect } from 'react-redux';
import  { Route, Redirect } from 'react-router-dom';
import Header from "../components/Header";
import LoggedInHeader from "../components/LoggedInHeader";

export const PublicRoute = ({ 
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
            <div>
                <Header />
                <Component {...props} />
            </div>
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
