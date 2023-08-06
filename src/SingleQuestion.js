import React from 'react';
import Question from './Question'

const SingleQuestion = ({questions}) => {
  return (
    <>
    {questions.map(question => (
        
          <Question key={question.id} question={question} />
        
  ))}
   </>
)};

    
export default SingleQuestion