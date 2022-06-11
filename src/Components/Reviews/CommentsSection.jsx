import React from "react";
import "./CommentsSection.css";

const UsersComments = () => {
    return (
        <>
            <div id="userscomments" className="container mt-5 mb-5">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-7">
                        <div className="card">
                            <div className="mt-3 d-flex flex-row align-items-center p-3 form-color">
                                <img src="/assests/profile.jpg" width="50" className="rounded-circle mr-2" />
                                <input type="text" className="form-control" placeholder="Enter your comment..." />
                                <button className="btn btn-success"> <i className="fa fa-paper-plane"></i> </button>
                            </div>
                            <div className="mt-4 container">
                                <div className="d-flex flex-row p-3">
                                    <img src="/assests/profile.jpg" width="40" height="40" className="rounded-circle mr-3" />
                                    <div className="container w-100 ml-2">
                                        <div className="d-flex ml-2 justify-content-between align-items-center">
                                            <div className="d-flex ml-2 align-items-center">
                                                <span className="mr-5">Brian selter</span>
                                                <small className="ml-5 c-badge">Top Comment</small>
                                            </div>
                                            <small>12h ago</small>
                                        </div>
                                        <p className="text-justify comment-text mb-0">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam</p>
                                        <div className="d-flex flex-row user-feed">
                                            <span><i className="fa fa-star text-warning"></i></span>
                                            <span><i className="fa fa-star text-warning"></i></span>
                                            <span><i className="fa fa-star text-warning"></i></span>
                                            <span><i className="fa fa-star text-warning"></i></span>
                                            <span><i className="fa fa-star text-warning"></i></span>
                                            <span className="idd1"> review</span>
                                        </div>
                                    </div>
                                </div>
                                <hr className="mb-2 mt-2" />
                                <div className="d-flex flex-row p-3">
                                    <img src="/assests/profile.jpg" width="40" height="40" className="rounded-circle mr-3" />
                                    <div className="container w-100 ml-2">
                                        <div className="d-flex ml-2 justify-content-between align-items-center">
                                            <div className="d-flex ml-2 align-items-center">
                                                <span className="mr-2">Seltos Majito</span>
                                                <small className="c-badge">Top Comment</small>
                                            </div>
                                            <small>2h ago</small>
                                        </div>
                                        <p className="text-justify comment-text mb-0">
                                            Tellus in hac habitasse platea dictumst vestibulum.
                                            Lectus nulla at volutpat diam ut venenatis tellus.
                                            Aliquam etiam erat velit scelerisque in dictum non consectetur.
                                            Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec.
                                            Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra.
                                            Aliquam faucibus purus in massa.</p>
                                        <div className="d-flex flex-row user-feed">
                                            <span><i className="fa fa-star text-warning"></i></span>
                                            <span><i className="fa fa-star text-warning"></i></span>
                                            <span><i className="fa fa-star text-warning"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span className="idd1"> review</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UsersComments;