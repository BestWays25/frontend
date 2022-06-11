import React from "react";
import HomeLayout from "../../Layouts/HomeLayouts";
import "./Style.css";
import "../Search/Search.css"
import Card from "../../Components/Products/Card";
import HeaderCat from "./HeaderCat";
import SidebarCat from "./SidebarCat";
import ByPrice from "./ByPrice";
import ByPopularity from "./ByPopularity";
const FilteredProducts = () => {
    return (
        <>
            <div class="col-md-8">
                <h3 class="pb-4 mb-4 fst-italic border-bottom">
                    Products By Category
                </h3>

                <article class="blog-post">
                    <h2 class="blog-post-title mb-5">category name</h2>
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-6">
                                <Card />
                            </div>
                            <div className="col-6">
                                <Card />
                            </div>
                            <div className="col-6">
                                <Card />
                            </div>
                            <div className="col-6">
                                <Card />
                            </div>
                        </div>
                    </div>
                </article>

            </div>
        </>
    )
}

const ProductsByCtaegory = () => {
    return (
        <>
            <HomeLayout >
                <main class="container mt-5 py-5" id="categories">
                    <HeaderCat />
                    <div class="row g-5">
                        <SidebarCat />
                        {/* <FilteredProducts /> */}
                        {/* <ByPrice /> */}
                        <ByPopularity />
                    </div>
                </main>
            </HomeLayout>
        </>
    );
}

export default ProductsByCtaegory;
