import React from 'react';

export const Display = props => {
  return (
    <div>
      <h1>
        {props.NumberOne}
        {props.operator}
      </h1>
    </div>
  );
};
