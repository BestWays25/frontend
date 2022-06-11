import React from "react";

const SidebarCat = () => {
    return (
        <>
            <div class="col-md-4">
                <div class="position-sticky" >
                    <div class="p-4 mb-3 bg-light rounded">
                        <h4 class="fst-italic">Chose your filter</h4>
                        <p class="mb-0"> Take you opportunity.</p>
                    </div>

                    <div class="p-4">
                        <h4 class="fst-italic">Categories</h4>
                        <ol class="list-unstyled mb-0">
                            <li><a className="nav-link fw-bold" href="#">Categorie 1</a></li>
                            <li><a className="nav-link fw-bold" href="#">Categorie 2</a></li>
                            <li><a className="nav-link fw-bold" href="#">Categorie 3</a></li>
                            <li><a className="nav-link fw-bold" href="#">Categorie 4</a></li>
                            <li><a className="nav-link fw-bold" href="#">Categorie 5</a></li>
                        </ol>
                    </div>

                    <div class="p-4">
                        <h4 class="fst-italic">filter :</h4>
                        <ol class="list-unstyled">
                            <li><a className="nav-link" href="#">by popularity</a></li>
                            <li><a className="nav-link" href="#">by price</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SidebarCat