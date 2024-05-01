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
        <p></p>
      </fieldset>
      <fieldset className='names' >
       
          <h1><span>2. GPA Calculator</span></h1>
      
        <p></p>
      </fieldset>
    </div>
  );
}

export default Portfolio;
