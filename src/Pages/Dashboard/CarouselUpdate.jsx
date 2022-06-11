import React, { useState } from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";

const Update = () => {
    return (
        <>
            <h1 className="text-warning text-center fs-4 mb-2 mt-5">Update   Carousel</h1>
            <div className="col-md-12 mb-3">
                <div className="card p-4 mb-2">
                    <div className="row g-3">
                        <div className="col-12">
                            <label for="country" className="form-label fw-bold">Carousel <span className="text-danger"> *</span></label>
                            <select className="form-select form-select-lg" id="country" required>
                                <option value="">Carousel 1</option>
                                <option>Carousel 2</option>
                                <option>Carousel 3</option>
                                <option>Carousel 4</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <label for="firstName" className="form-label fw-bold">Title <span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label for="lastName" className="form-label fw-bold">Button <span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                        <div className="col-12">
                            <label for="address2" className="form-label fw-bold">Description <span className="text-danger"> *</span></label>
                            <textarea type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                        </div>

                        <div className="col-12">
                            <label for="photo" className="form-label fw-bold">Photos <span className="text-danger"> *</span></label>
                            <input type="file" className="form-control" id="photo" />
                        </div>
                        <button type="button" className="btn btn-outline-warning">Save</button>
                    </div>
                </div>
            </div>
        </>
    );
}

const Add = () => {
    return (
        <>
            <h1 className="text-warning text-center fs-4 mb-2 mt-5 ">Add Carousel</h1>
            <div className="col-md-12 mb-3">
                <div className="card p-4 mb-2">
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label for="firstName" className="form-label fw-bold">Title <span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label for="lastName" className="form-label fw-bold">Button <span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                        <div className="col-12">
                            <label for="address2" className="form-label fw-bold">Description <span className="text-danger"> *</span></label>
                            <textarea type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                        </div>

                        <div className="col-12">
                            <label for="photo" className="form-label fw-bold">Photos <span className="text-danger"> *</span></label>
                            <input type="file" className="form-control" id="photo" />
                        </div>
                        <button type="button" className="btn btn-outline-warning">Save</button>
                    </div>
                </div>
            </div>
        </>
    );
}

const Delete = () => {
    return (
        <>
            <h1 className="text-warning text-center fs-4 mb-2 mt-5">Delete   Carousel</h1>
            <div className="col-md-12 mb-3">
                <div className="card p-4 mb-2">
                    <div className="row g-3">
                        <div className="col-12">
                            <label for="country" className="form-label fw-bold">Carousel <span className="text-danger"> *</span></label>
                            <select className="form-select form-select-lg" id="country" required>
                                <option value="">Carousel 1</option>
                                <option>Carousel 2</option>
                                <option>Carousel 3</option>
                                <option>Carousel 4</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>
                        <button type="button" className="btn btn-outline-warning">Save</button>
                    </div>
                </div>
            </div>
        </>
    );
}
const CarouselUpdate = () => {
    const [showResults1, setShowResults1] = useState(false)
    const [showResults2, setShowResults2] = useState(false)
    const [showResults3, setShowResults3] = useState(false)
    return (
        <>
            <DashboardLayout>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
                    <h1 className="text-warning text-center text-uppercase mb-2 shadow">Carousel</h1>
                    <div className="container justify-content-center align-items-centter text-center mt-5">
                        {/* <button className="btn btn-outline-secondary" onClick={onClick1}>Add Category</button> */}
                        <button className="btn btn-outline-secondary" onClick={() => setShowResults1(!showResults1)}>Add Category {showResults1 ? 'show' : 'hide'}</button>
                        <button className="btn btn-outline-secondary ms-3" onClick={() => setShowResults2(!showResults2)}>Update Category {showResults2 ? 'show' : 'hide'}</button>
                        <button className="btn btn-outline-secondary ms-3" onClick={() => setShowResults3(!showResults3)}>Delete Category {showResults3 ? 'show' : 'hide'}</button>
                    </div>
                    <div className="row">
                        {/* {showResults1 ? <Add /> : null} */}
                        {showResults1 && <Add />}
                    </div>
                    <div className="row">
                        {showResults2 && <Update />}
                    </div>
                    <div className="row">
                        {showResults3 && <Delete />}
                        {/* {showResults3 ? <Delete /> : null} */}
                    </div>
                </main>
            </DashboardLayout>
        </>
    );
}

export default CarouselUpdate;