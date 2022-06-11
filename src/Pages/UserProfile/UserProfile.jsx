import React from "react";
import { useSelector } from 'react-redux'

import "./Style.css";
const UserProfile = () => {
    const { user } = useSelector(
        (state) => state.auth
    );

    return (
        <>
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                <div className="container py-3">
                    <div className="row ">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {user.username}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {user.email}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Phone</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        {user.phone}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Country</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        {user.country}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        {user.address}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;