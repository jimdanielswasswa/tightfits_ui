import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Category from "../../features/categories/Category";
import { selectImagesByTag } from "../../features/images/ImagesSlice";
import one from "../../images/alexandru-bogdan-ghita-UeYkqQh4PoI-unsplash.jpg";
import AppCarousel from "../AppCarousel/AppCarousel";

import "./Home.css";

const Home = () => {
    let images = useSelector((state) => selectImagesByTag(state, 'HOME_SLIDE_SHOW'));
    return (
        <main className="m-0 p-0">
            <div className="row">
                <div className="col g-0">
                    <AppCarousel images={images} />
                </div>
            </div>
            <div className="row pt-5 pb-4 border-top border-bottom">
                <div className="col-12"><h5 className="text-center text-uppercase fw-bold">Categories</h5></div>
            </div>
            <div className="row pt-5 pb-5 bg-light border-bottom d-flex justify-content-start align-items-start">
                <div className="col-md-6">
                    <Category id={3} classess={'img-thumbnail'} />
                </div>
                <div className="col-md-3 d-flex align-items-start flex-wrap">
                    {[1, 2].map((categoryId) => (<Category id={categoryId} key={categoryId} classes={'img-fluid img-thumbnail d-flex'} />))}
                </div>
                <div className="col-md-3 d-flex align-items-start flex-wrap">
                    {[4, 5].map((categoryId) => (<Category id={categoryId} key={categoryId} classes={'img-fluid img-thumbnail d-flex'} />))}
                </div>
                <div className="col-12 pt-3 text-center">
                    <Link to='/categories' className="btn btn-primary fw-bold text-white">View More</Link>
                </div>
            </div>
            <div className="row pt-5 pb-4 border-bottom">
                <div className="col-12"><h5 className="text-center text-uppercase fw-bold">Trending Products</h5></div>
            </div>
            <div className="row py-3 bg-light border-bottom">
                <div className="col-md-3">
                    <div className="card">
                        <img src={one} alt="alt" className="img-fluid card-image-top" />
                        <div className="card-body">
                            Lorem Ipsum
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={one} className="img-fluid card-image-top" />
                        <div className="card-body">
                            Lorem Ipsum
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={one} className="img-fluid card-image-top" />
                        <div className="card-body">
                            Lorem Ipsum
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={one} className="img-fluid card-image-top" />
                        <div className="card-body">
                            Lorem Ipsum
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-5 pb-4 border-bottom">
                <div className="col-12"><h5 className="text-center text-uppercase fw-bold">On Sale</h5></div>
            </div>
            <div className="row pt-4 pb-5 mb-4 bg-light border-bottom">
                <div className="col-md-3">
                    <div className="card">
                        <img src={one} className="img-fluid card-image-top" />
                        <div className="card-body">
                            Lorem Ipsum
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={one} className="img-fluid card-image-top" />
                        <div className="card-body">
                            Lorem Ipsum
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={one} className="img-fluid card-image-top" />
                        <div className="card-body">
                            Lorem Ipsum
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={one} className="img-fluid card-image-top" />
                        <div className="card-body">
                            Lorem Ipsum
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Home;