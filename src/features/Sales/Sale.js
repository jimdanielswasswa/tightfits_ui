import React from 'react';
import { selectSaleById } from './salesSlice';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectProductById } from '../products/productsSlice';
import { BASE_IMAGE_URL } from '../../App';
import moment from 'moment';
const Sale = ({ id }) => {
    debugger
    const sale = useSelector((state) => selectSaleById(state, id));
    const product = useSelector((state) => selectProductById(state, sale.product));
    const format = 'dddd MMMM yyyy';
    return (<div className="col-md-4">
        <Link to={`/products/${product.id}`} className="nav-link fw-light text-center">
            <div className="card">
                <img src={`${BASE_IMAGE_URL}/${product.image}`} className="img-fluid card-image-top" alt={`${BASE_IMAGE_URL}/${product.image}`} />
                <div className="card-body details bg-body opacity-75 text-white d-flex flex-column justify-content-between">
                    <div className="d-flex flex-column justify-content-between flex-wrap px-1">
                        <div className="d-flex justify-content-start py-1">{product.name }</div>
                        <div className="d-flex justify-content-end">$ {sale.price}</div>
                    </div>
                    <div className="d-flex justify-content-between flex-row border-top py-1">
                        <div className="d-flex justify-content-start">From: {(sale.start_date) ? moment(sale.start_date).format(format) : 'N/A'}</div>
                        <div className="d-flex justify-content-end">To: {(sale.end_date) ? moment(sale.end_date).format(format) : 'N/A'}</div>
                    </div>
                </div>
            </div>
        </Link>
    </div>);
};

export default Sale;