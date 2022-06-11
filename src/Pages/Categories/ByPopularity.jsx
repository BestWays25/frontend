import React from "react";
import Card from "../../Components/Products/Card";

const ByPopularity = () =>{
    return(
        <>
                    <div class="col-md-8">
                <h3 class="pb-4 mb-4 fst-italic border-bottom">
                    Products By Popularity
                </h3>
                <article class="blog-post">
                    <h2 class="blog-post-title mb-5">Most Popular Products</h2>
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

export default ByPopularity;