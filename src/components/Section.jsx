import React from 'react';
import { Children } from 'react';
import '../style/Section.css';
import { useDarkMode } from '../context/DarkModeContext';

export const Section = ({ children}) => {
  const { darkMode } = useDarkMode();

  return (

    <div className={`section-container cnt-section ${darkMode ? 'cnt-section-dark' : 'cnt-section-clear'}`} >
        {Children.map(children, child =>
        <>
          {child}
        </>
      )}
    </div>
  )
}
