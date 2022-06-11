import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const HomeLayout = (props) =>{
    return(
        <>
        <Navbar />
        <>
        {props.children}
        </>
        <Footer />
        </>
    );
}

export default HomeLayout;