import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{
    id: 1, first_name: '', last_name: '', email: '',
    phone_number: '', address1: '', address2: '', city: '', state: '', zip: ''
}];

const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        customerAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(customer) {
                return {
                    payload: {
                        id: nanoid(),
                        ...customer
                    }
                }
            }
        },
        customerUpdated(currentState, action) {
            const { id, firstName, lastName, email, phoneNumber, address1, address2, city, state, zip } = action.payload;
            const customer = currentState.customers.find((c) => c.id === id);
            if (customer) {
                customer.first_name = firstName;
                customer.last_name = lastName;
                customer.email = email;
                customer.phone_number = phoneNumber;
                customer.address1 = address1;
                customer.address2 = address2;
                customer.city = city;
                customer.state = state;
                customer.zip = zip;
            }
        }
    }
});

export const { customerAdded, customerUpdated } = customerSlice.actions;

export default customerSlice.reducer;