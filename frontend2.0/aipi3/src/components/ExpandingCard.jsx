import React from 'react';
import useCollapse from 'react-collapsed';
import QuestionHeader from './QuestionHeader';
import RadioButtonSelect from './RadioButtonSelect';
import '../styles/ExpandingCard.css'
import CheckBoxSelect from './CheckBoxSelect';


export default function ExpandingCard(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    const q1 = ['Manual inputs from the field', 
                'Automatically from business apps',
                'Machine learning triggers'];

    const q2 = ['Centralized data warehouse', 
                '3rd party apps (salesforce, google analytics, etc.)',
                'Spreadsheets',
                'Data warehouses + tools',
                'No source of truth'];
    const q3 = ['Automatically w/ data transformation/cleansing tools', 
                'Manually w/ spreadsheets & csv uploads',
                'Other'];
    const q4 = ['Presentations',
                'Excel Models',
                'Dashboards'];

    const question_content = (
        <div>
            <QuestionHeader headline="How is most data generated in your company?"></QuestionHeader>
            <RadioButtonSelect
                 options={q1}></RadioButtonSelect>

            <QuestionHeader headline="For any of your company’s data designated as source-of-truth, where is it stored?"></QuestionHeader>
            <RadioButtonSelect
                 options={q2}></RadioButtonSelect>

            <QuestionHeader headline="How do you transform and cleanse your data?"></QuestionHeader>
            <RadioButtonSelect
                options={q3}></RadioButtonSelect>
            
            <QuestionHeader headline="How is data being consumed by business users?"></QuestionHeader>
            <CheckBoxSelect
                options={q4}></CheckBoxSelect>
        </div>);
    return (
        <div className="collapsible" >
            <div className="header" {...getToggleProps()}>
                <div className="section-header">
                    <span className="arrow">▼ Data and Machine Learning</span>
                </div>
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {question_content}
                </div>
            </div>
            {/* {isExpanded ? 'Collapse' : 'Expand'} */}
        </div>
        
    );
}