import React from "react";
import Stars from '../Reviews/Rating';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./Card.css";

const Card = (props) => {
    return (
        <>
            <div id="cardpro" >
                <div className="product-grid">
                    <div className="product-image">
                        <a href={`/products/${props.id}`} className="image">
                            {/* <img className="img-1" src="/assests/frontpro1.jpeg" /> */}
                            <LazyLoadImage effect="blur" className="img-1" src={props.image} />
                        </a>
                        <span className="product-discount-label">New</span>
                        <ul className="product-links">
                            <li><a href={`/products/${props.id}`}><i className="fa fa-heart"></i></a></li>
                        </ul>
                        <a href={`/products/${props.id}`} className="add-to-cart">Add to Cart</a>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">{props.name}</a></h3>
                        <div className="price">${props.price}</div>
                        {/* <Stars  id={props.id}/> */}
                    </div>
                </div>
            </div>
        </>
    )
}


export default Card;