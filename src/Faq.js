
import React, { useState } from 'react';
import dataFAQ from './dataFAQ';
import SingleQuestion from './Question';

const TradeSafe = () => {
    const [questions, setQuestions] = useState(dataFAQ);
  return (
    <main className='About'>
 
        
       


        

      <div className='container'>
      <h2>Frequently Asked Questions</h2>
     
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    
   
          
      
</main>

);
}


export default TradeSafe