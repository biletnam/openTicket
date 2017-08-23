import React from 'react';
import DatePicker from 'react-native-datepicker';
import * as moment from 'moment';
import { View } from 'react-native';

/**
 * 
 * @param {*} param0 
 */
const DatePickerForm = ({ input, placeholder, defaultValue, meta: { touched, error } }) => (
    <DatePicker
        {...input}
        style={{ flex: 1 }}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
            dateInput: {
                marginLeft: 5
            }
        }}
    />
);

export default DatePickerForm;

