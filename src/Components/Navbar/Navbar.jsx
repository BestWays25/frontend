import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, reset } from '../../features/auth/authSlice';
import categoryService from '../../features/categories/categoryService';
import { toast } from 'react-toastify';
import Profile from "../../assests/profile.jpg"
import "./Navbar.css";
const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const [categories, setCategories] = useState(null)
    const { cart } = useSelector((state) => state.cart)

    useEffect(() => {

        categoryService.getCategories().then((data) => {
            setCategories(data)
        })

    }, [])


    const [colorChange, setColorchange] = useState(false);
    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
        toast.warn('user logged out');
    }
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <>
            <nav className={colorChange ? 'navbar navbar-expand-md navbar-dark fixed-top background-color-down' : 'navbar navbar-expand-md navbar-dark fixed-top background-color'}>
                <div id="nav-style" className="container-fluid">
                    <a className="navbar-brand bg-transparent" href="/">
                        <img className="align-top img-style" src="/assests/logo2.png" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link link-dark active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link link-dark active dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown">
                                    <li><a className="dropdown-item" href="/Dashboard/products/category">Categorie 1</a></li>
                                    <li><a className="dropdown-item" href="#">Categorie 2</a></li>
                                    <li><a className="dropdown-item" href="#">Categorie 3</a></li>
                                    <li><a className="dropdown-item" href="#">Categorie 4</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link link-dark active dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    New
                                </a>
                                <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown">
                                    <li><a className="dropdown-item" href="/Dashboard/products/category">Categorie 1</a></li>
                                    <li><a className="dropdown-item" href="#">Categorie 2</a></li>
                                    <li><a className="dropdown-item" href="#">Categorie 3</a></li>
                                    <li><a className="dropdown-item" href="#">Categorie 4</a></li>
                                </ul>
                            </li>
                        </ul>
                        {

                            (auth.user != null) ? (
                                <>
                                    <form className="d-flex align-items-center text-center justify-content-center">
                                        <div className="btn-group">
                                            <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={Profile} alt="mdo" width="24" height="24" className="rounded-circle" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start text-small shadow" >
                                                <li><a className="dropdown-item" href="/Profile">Profile</a></li>
                                                <li><a className="dropdown-item" href="/Dashboard">Dashboard</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li> <button className="dropdown-item" onClick={onLogout} >Sign out</button> </li>
                                            </ul>
                                        </div>
                                        <a className="btn" href="/cart">
                                            <i className="fa fa-shopping-cart me-1"></i>(0)</a>
                                        <a className="btn " href="/Search" >
                                            <i className="fa fa-search me-1"></i></a>
                                    </form>
                                </>
                            ) : (
                                <>
                                    <form className="d-flex align-items-center text-center justify-content-center">
                                        <a className="btn " href="/Products" ><i className="fa fa-search me-1">
                                        </i> </a>
                                        <a className="btn " href="/login" ><i className="fa fa-sign-in me-1">
                                        </i> Login</a>
                                        <a className="btn " href="/register">
                                            <i className="fa fa-user-plus me-1"></i>Register</a>
                                        <a className="btn" href="/cart">
                                            <i className="fa fa-shopping-cart me-1"></i>(0)</a>
                                    </form>
                                </>

                            )
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;