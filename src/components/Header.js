import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';
import logo from "../../public/images/logo.png";

export const Header = ({startLogin}) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
            <img id="navImage" src={logo} alt="logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05"
                aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars fa-3x text-white bg-primary"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active ml-4">
                    <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item ml-4">
                    <a className="nav-link" href="/home">About</a>
                </li>
                <li className="nav-item ml-4">
                    <button className="button" onClick={startLogin}>Log In</button>
                </li>
            </ul>
        </div>
    </nav>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Header);