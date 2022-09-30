import React from 'react';
import '../styles/QuestionHeader.css';

export default function QuestionHeader(props){

    return (
        <div>
            <div className="form-question-headline">
            {props.headline}
            </div>
            <div className="form-question-subtext">
                {props.subtext}
            </div>
            <div className="form-question-fineprint">
                {props.fineprint}
            </div>
        </div>
    );
}