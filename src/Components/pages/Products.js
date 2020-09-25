import React from 'react';
import {muscles, exercises} from '../../store';
function Products() {
  const states=[exercises];
  const state = {
    exercises,
    exercise: {}
  };
  const handleAction = e => {
   // let target = e.target;
  
    alert("asdas");
}
  return (
    <div className='products'>
      <h3 onClick={() => { handleAction() }} >products</h3>

    </div>
  );
}

export default Products;
