import React from "react";
import "./HeroSection.css";
import ImgCar1 from "../../assests/Carousel2.png";
const HeroSection = () => {
    return (
        <>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            className="d-block w-100"
                            src={ImgCar1}
                            // src="./assests/Carousel2.png"
                            alt="First slide"
                        />
                        <div className="container">
                            <div className="carousel-caption text-start stage">
                                <h1 className="fw-bold text-dark text-uppercase layer">Arynass
                                 <span className=" text-warning fst-italic">Cosmitics</span></h1>
                                <p id="title-carousel2" className="fw-bolder">
                                <span>Discover </span>
                                    <span>more offers </span>
                                    <span>and try </span>
                                    <span>the best </span>
                                    <span>for yourself, </span>
                                    <br /> 
                                    <span>there are </span>
                                    <span>no hidden </span>
                                    <span>fees.</span>
                                    {/* <span>. </span> */}
                                          </p>
                                <p id="title-carousel2"><span><a className="btn btn-lg btn-outline-warning" href="#">Discover</a></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src={ImgCar1}
                            // src="../../assests/Carousel2.png"
                            alt="First slide"
                        />
                        <div id="title-carousel2" className="container">
                            <div className="carousel-caption">
                                <h1 className="title-font text-dark">Another example headline.</h1>
                                <p>
                                    <span>get&nbsp; </span>
                                    <span> our&nbsp; </span>
                                    <span> best-seller&nbsp; </span>
                                    <span> only&nbsp; </span>
                                    <span> in&nbsp; </span>
                                    <span> our&nbsp; </span>
                                    <span> online&nbsp; </span>
                                    <span> store&nbsp; </span>
                                    <span>. </span>
                                           </p>
                                                 
                                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src={ImgCar1}
                            // src="./assests/m2.png"
                            alt="First slide"
                        />
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default HeroSection;