import React from "react";
import { NavLink,Link } from "react-router-dom";

export default class Footer extends React.Component {
    render() {
        return (
            <div className="bg-secondary pt-3">
                <footer className="bg-white py-5 px-3">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-muted">Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/shop" className="nav-link px-2 text-muted">Shop</NavLink></li>
                        <li className="nav-item"><NavLink to="/sales" className="nav-link px-2 text-muted">Sales</NavLink></li>
                    </ul>
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <div className="col-md-4 d-flex align-items-center">
                            <p className="text-center text-muted">© 2021 Jim Daniels Wasswa</p>
                        </div>
                        <div className="col-md-8 d-flex justify-content-end">
                            <ul className="list-unstyled nav">
                                <li className="ms-3"><Link to="" className="nav-link px-2 text-muted"><i className="fa fa-facebook-f fa-2x"></i>Facebook</Link>
                                </li>
                                <li className="ms-3"><Link to="" className="nav-link px-2 text-muted"><i className="fa fa-twitter fa-2x"></i>Twitter</Link></li>
                                <li className="ms-3"><Link to="" className="nav-link px-2 text-muted"><i className="fa fa-pinterest-p fa-2x"></i>Pinterest</Link>
                                </li>
                                <li className="ms-3"><Link to="" className="nav-link px-2 text-muted"><i className="fa fa-google-plus fa-2x"></i>Google
                                    Plus</Link></li>
                                <li className="ms-3"><Link to="" className="nav-link px-2 text-muted"><i className="fa fa-linkedin fa-2x"></i>LinkedIn</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}