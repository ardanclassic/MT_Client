import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerField = ({ name, value, onChange, active }) => {
    return (
        <DatePicker
            selected={(value && new Date(value)) || null}
            onChange={val => { onChange(name, val) }}
            dateFormat="dd MMMM yyyy" 
            disabled={ active === true ? true : false }
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            placeholderText="Date of Birth"
        />
    );
};

export const register = async (newUser) => {
    const setDate = newUser.birthdate === '' ? '' : formatDate(newUser.birthdate);
    const data = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phone: newUser.phone,
        birthdate: setDate,
        gender: newUser.gender
    }
    const link = 'https://us-central1-mt-test-42640.cloudfunctions.net/app/'
    const api = await axios.post(link + 'users', data)
    return api.data;
}

const errText = {
    required: ' is required',
    phoneRegID: /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/g,
    phoneValidtxt: 'please enter a valid Indonesian phone number',
    mailtxt: 'please enter a valid email',
}
export const validator  = Yup.object({
    firstName: Yup.string().required('first name' + errText.required),
    lastName: Yup.string().required('last name' + errText.required),

    email: Yup.string()
    .email(errText.mailtxt)
    .required('email' + errText.required),

    phone: Yup.string()
    .required('phone number' + errText.required)
    .matches(errText.phoneRegID, errText.phoneValidtxt)
})

const formatDate = (dt) => {
    var month_names =["January","February","March",
                      "April","May","June",
                      "July","August","September",
                      "October","November","December"];
    
    var day = dt.getDate();
    var month_index = dt.getMonth();
    var year = dt.getFullYear();
    
    return "" + day + " " + month_names[month_index] + " " + year;
}