import React from 'react';
import {ReversedRadioButton } from 'react-radio-buttons';
import "../themes/RadioButtonSelect.css"

export default function RadioButton(props){

    return(
        <div>
            <label class="container">{props.option}
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
            </label>
        </div>
    )
}