import React from "react";
import "./BottomSection.css";
const BottomSection = () =>{
    return (
        <div id="bottomservices" >
        {/* <div className="b-example-divider"></div> */}
        <div class="container my-5">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 font-text fst-italic mb-2 fw-bold lh-1">BEST&nbsp;
            <span className="text-warning fst-italic">OFFERS</span> </h1>
            <p class="fw-semi-bold">Discover more offers and try the best for yourself,<br /> there are no hidden fees.</p>
            <p className="text-decoration-underline">What are you waiting for! Take the opportunity.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" class="btn2 px-4 me-md-2 fw-bold">Discover</button>
              {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> */}
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img class="rounded-lg-3" src="/assests/imgh1.png" alt="" width="100%" height="300" />
          </div>
        </div>
      </div>
      {/* <div className="b-example-divider"></div> */}
      </div>
    );
}

export default BottomSection;