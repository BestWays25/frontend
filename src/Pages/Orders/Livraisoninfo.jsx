import React from "react";
import "./LivraisonInfo.css";
import { useSelector } from 'react-redux';
const LivraisonInfo = () => {
        const { user } = useSelector(
            (state) => state.auth
        );
    return (
        <section id="features" className="container py-2" data-stellar-background-ratio="0.2">
            <div className="overlay"></div>
            <div className="container justify-content-center align-items-center mt-5 mb-5">
                <div className="row ">
                    <div className="col-6 col-sm-4 justify-content-center align-items-center box-item">
                        <span className="icon text-center justify-content-center mt-2">
                            <i className="fa fa-user"></i>
                        </span>
                        <div className="text">
                            <h4 className="text-uppercase">Custmoer</h4>
                            <p>full name <br />
                                {user.email}</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 justify-content-center align-items-center box-item">
                        <span className="icon text-center justify-content-center mt-2">
                            <i className="fa fa-truck"></i>
                        </span>
                        <div className="text">
                            <h4 className="text-uppercase">Order info</h4>
                            <p>Shipping: country<br />
                            Pay method: credit card</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 justify-content-center align-items-center box-item">
                        <span className="icon text-center justify-content-center mt-2">
                            <i className="fa fa-map-marker"></i>
                        </span>
                        <div className="text">
                            <h4 className="text-uppercase">Deliver to</h4>
                            <p>Address: Ait melloul Agadir, Lot amlak Souss bloc 1, 86150<br />
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LivraisonInfo;