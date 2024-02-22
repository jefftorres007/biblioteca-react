import React from 'react';
import { Children } from 'react';
import '../style/Section.css';

export const Section = ({dataStyle, children}) => {

  return (
    // <div style={dataStyle} >
    <div className='cnt-section cnt-section-clear' >
        {Children.map(children, child =>
        <>
          {child}
        </>
      )}
    </div>
  )
}
