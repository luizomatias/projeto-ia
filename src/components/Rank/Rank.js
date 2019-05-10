import React from 'react';

const Rank = ({name, entries}) => {
  return (
    <div>
      <div className='white f3'>
      {`${name} , você já testou o reconhecimento de rostos...`}
      </div>   
      <div className='white f1 '>
        {`${entries} vezes.`}  
      </div>
    </div>
  );
}

export default Rank; 