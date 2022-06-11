import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import { update, reset } from '../../features/auth/authSlice.js';
import authService from '../../features/auth/authService';
import "./Style.css";
const EditForm = () => {
    let { id } = useParams();

    const [value, setValue] = useState(null);
    const { setAuth } = useAuth();
    const redirect = useNavigate();
    const dispatch = useDispatch();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/profile";

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email,
        fullname: user.fullname,
        phone: user.phone,
        country: user.country,
        city: user.city,
        address: user.address,
        zip: user.zip,
    })

    const { username, email,fullname, phone, country, city, address, zip } = formData;

    useEffect(() => {
        if (isError) {
            console.log('error ',isError)
            toast.error(message)
        }

        if (isSuccess) {
            setAuth({ user });
            redirect(from, { replace: true });
            toast.success('user Update successufully');
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, redirect, dispatch])


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            username,
            email,
            fullname,
            phone,
            country,
            city,
            address,
            zip,
        }
        authService.update(userData, user.id)
        // dispatch(update(userData, user.id))
    }
    return (
        <>
            <div className="tab-pane mt-3 fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                <form className="needs-validation" >
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label for="firstName " className="form-label fw-bolder">Full Name
                            <span className="require">&nbsp;*</span></label>
                            <input type="text" className="form-control" placeholder="" required 
                            name="fullname"
                            value={fullname} 
                            // defaultValue={user.fullname}
                            onChange={onChange}
                            />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label for="lastName" className="form-label fw-bolder">Username
                            <span className="require">&nbsp;*</span></label>
                            <input type="text" className="form-control" placeholder="enter username"
                             name="username"
                            //  defaultValue={user.username}
                             value={username}
                              onChange={onChange}
                               />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label for="email" className="form-label fw-bolder">Email
                            <span className="require">&nbsp;*</span></label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Your Email" 
                            name="email"
                            // defaultValue={user.email}
                            value={email} 
                            onChange={onChange}
                             />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        {/* <div className="col-sm-6">
                            <label for="state" className="form-label fw-bolder">Country
                            <span className="require">&nbsp;*</span></label>
                            <CountrySelect
                                value={value}
                                onChange={setValue}
                            // className="form-select"
                            />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div> */}
                        <div className="col-sm-6">
                            <label for="lastName" className="form-label fw-bolder">Country
                            <span className="require">&nbsp;*</span></label>
                            <input type="text" className="form-control" id="lastName" placeholder="" required 
                            name="country"
                            // defaultValue={user.country}
                            value={country}
                            onChange={onChange}

                            />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label for="lastName" className="form-label fw-bolder">City
                            <span className="require">&nbsp;*</span></label>
                            <input type="text" className="form-control" id="lastName" placeholder="" required 
                            name="city"
                            // defaultValue={user.city}
                            value={city}
                            onChange={onChange}

                            />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label for="lastName" className="form-label fw-bolder">zip
                            <span className="require">&nbsp;*</span></label>
                            <input type="text" className="form-control" id="lastName" placeholder="" required 
                            name="zip"
                            // defaultValue={user.zip}
                            value={zip}
                            onChange={onChange}

                            />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div className="col-12">
                            <label for="address" className="form-label fw-bolder">
                                Address <span className="require">&nbsp;*</span>
                            </label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required 
                            name="address"
                            // defaultValue={user.address}
                            value={address}
                            onChange={onChange}
                            />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <label for="lastName" className="form-label fw-bolder">Phone
                            <span className="require">&nbsp;*</span></label>
                            <input type="text" className="form-control" id="lastName" placeholder="" required 
                            name="phone"
                            // defaultValue={user.phone}
                            value={phone}
                            onChange={onChange}

                            />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-12 mt-2">
                        
                        <div className="form-check form-check-inline ">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" for="inlineRadio2">Famale</label>
                        </div>
                    </div> */}
                    <hr className="my-4" />

                    <button className="w-100 btn btn-outline-dark btn-lg" type="submit" 
                    onClick={onSubmit}
                    >Continue</button>
                </form>
            </div>
        </>
    );
}

export default EditForm;