import React from 'react';
import '../themes/CheckBoxSelect.css';

export default function CheckBoxSelect(props){

    var content_arr = [
    ];
    for(var i = 0; i < props.options.length; i++){
        const option = props.options[i];
        const cur_question = <CheckBoxOption key={i} option={option}/>
        content_arr.push(cur_question)
    }   

    return (
        <div className='checkbox-group'>
            <form>
                {content_arr}
            </form> 
        </div>
    );
}

function CheckBoxOption(props){

    return(
        <div>
            <label class="checkbox-container">{props.option}
                    <input type="checkbox" />
                    <span class="checkbox-checkmark"></span>
                </label>
        </div>
    );
}