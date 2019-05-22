import React from 'react';

import Header from './components/header';

export default (props) => {
  return (
    <div> 
      <Header />
      <div className="page-container">
      { props.children }
      </div>
    </div>
  );
};
