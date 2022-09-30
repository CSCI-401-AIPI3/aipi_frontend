import './App.css';
import React from 'react';
// import NumericalSelect from './NumericalSelect';
// import QuestionHeader from './components/QuestionHeader';
import ExpandingCard from './components/ExpandingCard';
// import ValueSlider from './ValueSlider';
// import ReactSlider from 'react-slider';
// import MultiSelect from './MultiSelect';

function App() {

    // var headline1 = '1 - Sample Numerical Selector: Data Analytics Solutions';
    // var subtext1 = 'How robust are your current data analytics? '
    // var fineprint1 = '1 - Not Very Robust | 5 - Very Robust'

    // var headline2 = '2 - Sample Radio Button Selector: Analytics Outcome Preferences';
    // var subtext2 = 'What is your top goal for improving analytics?'


return (
    <div className="App">
        <h1 className='form-header'>Technology Assessment</h1>
        <div className="form-sub-header">
            <div className="sub-header-title">AIPI3® Technology</div>  
            <div className="sub-header-subtext">Please complete this assessment to determine which services would be best for you.</div> 
            <div className="sub-header-subtext">Click each section to complete the assessment.</div> 
        </div>
        <div className="spacer"></div>


        <ExpandingCard sectionHeader="Data and Machine Learning"></ExpandingCard>
        
    </div>);
}
export default App;
