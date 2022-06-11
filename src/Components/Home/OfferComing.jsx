import React from "react";
import "./Offer.css"
const OfferComming = () => {
    return (
        <>
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 text-warning text-uppercase fst-italic fw-bold">Coming soon</h1>
                    <p class="lead fw-normal">Soon new products with better quality and better price. Register to receive all new.</p>
                    <a class="btn btn-outline-secondary" href="#">Coming soon</a>
                </div>
                <div class="product-device shadow-sm d-none d-md-block">
                    <img src="/assests/imgh2.png" width="300px" height="450px" />
                </div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block">
                <img src="/assests/frontpro1.jpeg"  width="300px" height="540px"/>
                </div>
            </div>
        </>
    )
}

export default OfferComming;