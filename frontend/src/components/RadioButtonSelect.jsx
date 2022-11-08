import React from 'react';
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import RadioButton from './RadioButton';

export default function RadioButtonSelect(props){

    var content_arr = [
    ];
    for(var i = 0; i < props.options.length; i++){
        const option = props.options[i];
        const cur_question = <RadioButton key={i} option={option}/>
        content_arr.push(cur_question)
    }   
    return(
        <div className="radio-group">
            <form>
                {content_arr}
            </form>
        </div>
    );
}

