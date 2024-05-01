import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className='Projects' id='Projects'>
      <h1>Projects</h1>

      <fieldset className='names'>
        <a href="https://colab.research.google.com/drive/1O6qiI7DE0pMc0yAtCbw3lw6wTHgO7kKb" target="_blank" rel="noopener noreferrer">
          <h1><span>1. Python BCD Code Converter</span></h1>
        </a>
        <p>-This project takes BCD code inputs and devises expressions for conversion in standarad binary. These expressions are executed in behavioural, dataflow and structural level verilog codes</p>
         <p>-Devised complex algorithms to construct Karnaugh Maps and synthesize simplified Boolean expressions, significantly
            enhancing efficiency in data flow and behavioural level Verilog code development</p>
                </fieldset>
      <fieldset className='names' >
       
          <h1><span>2. GPA Calculator</span></h1>
      
        <p>-Developed and designed a user-friendly GPA calculator web application, enhancing student
interaction through intuitive HTML/CSS interfaces</p>
<p>-Implementing dynamic JavaScript for real-time validation and GPA computation,
demonstrating advanced proficiency in client-side scripting</p>
      </fieldset>
    </div>
  );
}

export default Portfolio;
