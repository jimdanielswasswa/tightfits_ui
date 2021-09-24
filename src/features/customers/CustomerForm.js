import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customerAdded } from "./customersSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

const CustomerForm = ({ match }) => {
    const { id } = match.params;
    const customer = useSelector((state) => state.customers.find((c) => Number(c.id) === Number(id)));
    const isUpdate = (customer) ? true : false;
    const dispatch = useDispatch();
    const history = useHistory();
    const [firstName, setFirstName] = useState(customer.first_name);
    const [lastName, setLastName] = useState(customer.last_name);
    const [email, setEmail] = useState(customer.email);
    const [phoneNumber, setPhoneNumber] = useState(customer.phone_number);
    const [address1, setAddress1] = useState(customer.address1);
    const [address2, setAddress2] = useState(customer.address2);
    const [city, setCity] = useState(customer.city);
    const [state, setState] = useState(customer.state);
    const [zip, setZip] = useState(customer.zip);
    const onFirstNameChanged = (e) => setFirstName(e.target.value);
    const onLastNameChanged = (e) => setLastName(e.target.value);
    const onEmailChanged = (e) => setEmail(e.target.value);
    const onPhoneNumberChanged = (e) => setPhoneNumber(e.target.value);
    const onAddress1Changed = (e) => setAddress1(e.target.value);
    const onAddress2Changed = (e) => setAddress2(e.target.value);
    const onCityChanged = (e) => setCity(e.target.value);
    const onStateChanged = (e) => setState(e.target.value);
    const onZipChanged = (e) => setZip(e.target.value);
    const onSave = (e) => {
        // if(firstName && lastName && email && phoneNumber && address1 && address2 && city && state && zip){
            dispatch(customerAdded({
                first_name: firstName,
                last_name: lastName,
                email,
                phone_number: phoneNumber,
                address1,
                address2,
                city,
                state,
                zip
            }));
        // }
    };
    return (<form>
        <div className="py-1">
            <label htmlFor="" className="form-label">First Name</label>
            <input type="text" className="form-control" placeholder="" value={firstName} onChange={onFirstNameChanged} />
        </div>
        <div className="py-1">
            <label htmlFor="" className="form-label">Last Name</label>
            <input type="text" className="form-control" placeholder="" value={lastName} onChange={onLastNameChanged} />
        </div>
        <div className="py-1">
            <label htmlFor="" className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="" value={email} onChange={onEmailChanged} />
        </div>
        <div className="py-1">
            <label htmlFor="" className="form-label">Phone Number</label>
            <input type="phone" className="form-control" placeholder="" value={phoneNumber} onChange={onPhoneNumberChanged} />
        </div>
        <div className="py-1">
            <label htmlFor="" className="form-label">Address 1</label>
            <input type="text" className="form-control" placeholder="" value={address1} onChange={onAddress1Changed} />
        </div>
        <div className="py-1">
            <label htmlFor="" className="form-label">Address 2</label>
            <input type="text" className="form-control" placeholder="" value={address2} onChange={onAddress2Changed} />
        </div>
        <div className="py-1">
            <label htmlFor="" className="form-label">City</label>
            <input type="text" className="form-control" list="city-data-list" placeholder="City"  value={city} onChange={onCityChanged} />
            <datalist id="city-data-list">
                <option value="San Francisco" />
                <option value="New York" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
            </datalist>
        </div>
        <div className="py-1">
            <label htmlFor="" className="form-label">State</label>
            <input type="text" className="form-control" placeholder="" value={state} onChange={onStateChanged} />
        </div>
        <div className="py-1">
            <label htmlFor="" className="form-label">Country</label>
            <input type="zip" className="form-control" placeholder="" value={zip} onChange={onZipChanged} />
        </div>
        <div className="py-1">
            <button type="button" className="btn btn-success" onClick={onSave}>Save</button>
        </div>

    </form>
    );
};

export default CustomerForm;