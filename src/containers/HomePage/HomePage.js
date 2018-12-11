import React from 'react';
import {connect} from 'react-redux';
import brian from '../../../public/images/brianjordan.png';
import brian2 from '../../../public/images/brianjordan2.png';
import brian3 from '../../../public/images/brianjordan3.png';

export const HomePage = () => (
    <div id="homePageWrapper" className="container-fluid">
        <div className="row text-center text-white">
            <div className="col">
                <h2 className="mt-5">Blissfit Training</h2>
            </div>
        </div>

        <div className="row text-center text-white">
            <div className="col">
                <p>Discover your best self with the help of proven science</p>
            </div>
        </div>

        <div className="row text-center text-white">
            <div className="col">
                <p>Become the happiest you ever have</p>
            </div>
        </div>

        <div className="row">
            <div className="col align-self-center">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={brian} alt="First slide"/>
                            <div className="carousel-caption">
                                <h5>Brian and Jordan</h5>
                                <p>getting married and stuff</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={brian2} alt="Second slide"/>
                            <div className="carousel-caption">
                                <h5>Brian and Jordan 2</h5>
                                <p>putt putting and stuff</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={brian3} alt="Third slide"/>
                            <div className="carousel-caption">
                                <h5>Brian and Jordan 3</h5>
                                <p>super hero family and stuff</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    // startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(HomePage);