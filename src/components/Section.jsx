import React from 'react';
import { Children } from 'react';

export const Section = ({dataStyle, children}) => {

  return (
    <div style={dataStyle} >
        {Children.map(children, child =>
        <>
          {child}
        </>
      )}
    </div>
  )
}
