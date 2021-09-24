import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_IMAGE_URL } from "../../App";
import { selectCategoryById } from "./categorySlice";

const Category = ({ id, classes }) => {
    debugger
    const category = useSelector((state) => selectCategoryById(state, id));
    return (<Link to={`/categories/${category && category.id}/products`} className={`${classes} position-relative bg-transparent border-0`}>
            <div className="card">
            <img src={category && `${BASE_IMAGE_URL}/${category.image}`} className={`card-img`} alt={category && `${BASE_IMAGE_URL}/${category.image}`} />
                {/* <img src={category && `${BASE_IMAGE_URL}/${category.image}`} className={` m-0`} alt={category && `${BASE_IMAGE_URL}/${category.image}`} /> */}
                {/* <img src={category && `${BASE_IMAGE_URL}/${category.image}`} className={classes} alt={category && `${BASE_IMAGE_URL}/${category.image}`} /> */}
                <div className="card-img-overlay float-none">
                    <div className="details-content text-white"> {category && category.name} </div>
                </div>
            </div>
    </Link>);
};

export default Category;