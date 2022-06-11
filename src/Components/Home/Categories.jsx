import React from "react";
import "../../Pages/Categories/AllCategories.css";
const Categories = () => {
    return (
        <>
                <section className="team-area section-gap mb-5 mt-2 py-5" id="team">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="menu-content pb-70 col-lg-8">
                                <div className="title text-center">
                                    <h1 className="mb-5">Our Categories</h1>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <a href="#" >
                                        <img src="/assests/imgh1.png"  />
                                            <ul className="social">
                                                <li><i className="fa fa-eye"></i></li>
                                            </ul>
                                            </a>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Category Name</h3>
                                        <span className="post">24 products</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <a href="#" >
                                        <img src="/assests/imgh1.png"  />
                                            <ul className="social">
                                                <li><i className="fa fa-eye"></i></li>
                                            </ul>
                                            </a>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Category Name</h3>
                                        <span className="post">24 products</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <a href="#" >
                                        <img src="/assests/imgh1.png"  />
                                            <ul className="social">
                                                <li><i className="fa fa-eye"></i></li>
                                            </ul>
                                            </a>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Category Name</h3>
                                        <span className="post">number of products</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}

export default Categories;