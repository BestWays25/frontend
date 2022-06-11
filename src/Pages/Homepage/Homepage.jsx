  import React , { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Contact from "../../Components/Contact/Contact";
import BottomSection from "../../Components/Home/BottomSection";
import Categories from "../../Components/Home/Categories";
import HeroSection from "../../Components/Home/HeroSection";
import OfferComming from "../../Components/Home/OfferComing";
import LatestProducts from "../../Components/Products/LatestProducts";
import PopularProducts from "../../Components/Products/PopularProducts";
import CustomersReviews from "../../Components/Reviews/CustomersReviews";
import Services from "../../Components/Services/Services";
import HomeLayout from "../../Layouts/HomeLayouts";
import {getCart} from "../../features/Cart/cartSlice";
import {getSession} from "../../features/session/sessionSlice";
import "./Homepage.css"
const HomePage = () => {
    const { user } = useSelector((state) => state.auth)
    const { shopping_session } = useSelector((state) => state.shopping)
    
    const dispatch = useDispatch();

    useEffect( () => {
        if(user){
            dispatch(getSession(user.id))
          
        }

         
      
    }, [dispatch])
    useEffect( () => {
        if(shopping_session !== null){
            dispatch(getCart(shopping_session.id))
        }

         
      
    }, [dispatch])

    useEffect(() => {

        window.scrollTo(0,0);
      
      }, []);
    return (
        <>
            <HomeLayout>
                <HeroSection />
                <LatestProducts />
                <OfferComming />
                <Categories />
                <Services />
                <CustomersReviews />
                <div id="homepage" className=" container justify-content-center text-center align-items-center">
                    <hr className="mb-5 justify-content-center text-center align-items-center" />
                </div>
                <PopularProducts />
                <BottomSection />
                <Contact />
            </HomeLayout>
        </>
    );
}

export default HomePage;