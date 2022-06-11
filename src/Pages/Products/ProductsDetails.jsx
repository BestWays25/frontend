import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux';
import productService from '../../features/products/productService';
import cartService from '../../features/Cart/cartService';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./ProductsDetails.css";
import { FreeMode, Navigation, Thumbs } from "swiper";
// import UsersComments from "../../Components/Products/UsersComments";
import HomeLayout from "../../Layouts/HomeLayouts";
import UsersComments from "../../Components/Reviews/CommentsSection";
import Products from "./Products";
import "../Search/Search.css";
import Stars from '../../Components/Reviews/Rating';
import { toast } from 'react-toastify';

const ProductsDetails = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [productQty, setProductQty] = useState(0);
    const {user} = useSelector((state) => state.auth);
    const { shopping_session } = useSelector((state) => state.shopping);

    const [product, setProduct] = useState([]);
    let { pid } = useParams();

    useEffect(() => {
  
      productService.getProductById(parseInt(pid))
        .then((data) => setProduct(data[0]))
        .catch((err) => console.log(err))
  
  
    }, [])

    const decrement = () => {setProductQty(productQty - 1)  }
    const increment = () => {setProductQty(productQty + 1)  } 

    return (
        <>
            <HomeLayout>
                <div id="searchpage" className="container py-5 mt-5">
                    <header className="blog-header py-3">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-4 pt-1">
                                <h4 className="brand-title lh-1">ARYNASS
                                    <h6 className="fst-italic brand-title-text"> COSMITICS</h6>
                                </h4>
                            </div>
                            <div className="col-6 text-center d-flex">
                                <input className="form-control form-control-dark w-100 ms-2" type="text" placeholder="Search" aria-label="Search" />
                                <button className="btn bg-trasparent ms-2" href="#" aria-label="Search">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </header>
                    <hr className="" />
                </div>
                <section className="">
                    <div id="details" className="container mb-5">
                        <div className="card">
                            <div className="container-fliud">
                                <div className="wrapper row">
                                    <div className="preview col-md-6">
                                        <Swiper
                                            style={{
                                                "--swiper-navigation-color": "#fff",
                                                "--swiper-pagination-color": "#fff",
                                            }}
                                            spaceBetween={10}
                                            navigation={true}
                                            thumbs={{ swiper: thumbsSwiper }}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper2"
                                        >
                                            <SwiperSlide>
                                                <img src="/assests/frontpro1.jpeg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/assests/backpro1.jpeg" />
                                            </SwiperSlide>

                                        </Swiper>
                                        <Swiper
                                            onSwiper={setThumbsSwiper}
                                            spaceBetween={10}
                                            slidesPerView={4}
                                            freeMode={true}
                                            watchSlidesProgress={true}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide>
                                                <img src="/assests/frontpro1.jpeg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/assests/backpro1.jpeg" />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <div className="details col-md-6">
                           {
                              product ? <h3 className="product-title mb-3">{product.name}</h3> : <h3>Loading...</h3>
                           } 
                            <div className="rating mb-5">
                            {/* <Stars avg={rating.avg} reviews={rating.count} /> */}
                           {
                              (product && product.id) ?  <Stars id={product.id} /> : <></>
                           }
                            </div>
                            <div>
                            {
                                (productQty === 0) ? <>
                                    <button onClick = {increment}>+</button>
                            <span className='mx-3'>{productQty}</span>
                            <button disabled={true} onClick = {decrement }>-</button>
                                </> : 
                                <>    <button onClick = {increment}>+</button>
                                <span className='mx-3' >{productQty}</span>
                                <button onClick = {decrement }>-</button></>
                            }
                        
                            </div>
                            {
                                product ?   <p className="product-description"> {product.description}</p> : <>Loading...</>
                            }
                           {
                               product ?  <h4 className="price">current price: <span>${parseFloat(product.price * productQty).toFixed(2)}</span></h4> : <>Loading</>
                           }
                     
                            <div className="action d-flex w-20 h-20">

                       
                             {
                                 (productQty !== 0) ? ((user !== null) ? 
                               (  <button
                                 onClick={() => {
                                    cartService.incrementProductQty(parseInt(pid),shopping_session.id,{ 'quantity' : productQty})
                                    toast.success('product added into cart');
                                    }  } 
                                   className="add-to-cart btn btn-default ms-2"
                                   type="button"
                             >
                                 add to cart
                                 </button> ) :

                                   ( <button 
                                    onClick= {() => {
                                               if(!user) toast.warning('you are not logged in');
                                           }}
                                 
                                    //  disabled={true}
                                     className="add-to-cart btn btn-default ms-2" 
                                     type="button">
                                         add to cart
                                     </button>)):
                                   (  <button 
                                    
                                    disabled={true}
                                     className="add-to-cart btn btn-default ms-2" 
                                     type="button">
                                         add to cart
                                     </button>)
                                 
                                 
                             }


                              
                               
                             
                            </div>
                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <Products />
                    <div className="container">
                        <div id="homepage" className=" container justify-content-center text-center align-items-center">
                            <hr className="mb-5 justify-content-center text-center align-items-center" />
                        </div>
                        <h3 className="">Comments :</h3>
                    </div>
                    <UsersComments />
                </section>
            </HomeLayout>
        </>
    );
}

export default ProductsDetails;

{/* <div className="details col-md-6">
                                        
<h3 className="product-title mb-3">Products Title</h3>
<div className="rating mb-5">
    <div className="stars">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
    </div>
    <span className="review-no">41 reviews</span>
</div>
<p className="product-description"> Products Description =
    Suspendisse quos? Tempus cras iure temporibus?
    Eu laudantium cubilia sem sem!.</p>
<h4 className="price">current price: <span>$180</span></h4>
<p className="vote mb-4 mt-2"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
<h5 className="sizes mb-5">sizes:
    <span className="size" data-toggle="tooltip" title="small">s</span>
    <span className="size" data-toggle="tooltip" title="medium">m</span>
    <span className="size" data-toggle="tooltip" title="large">l</span>
    <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
</h5>
<div className="action d-flex w-20 h-20">
    <button className="add-to-cart btn btn-default ms-2" type="button">add to cart <i className="fa fa-shopping-cart"></i> </button>
</div>
</div> */}