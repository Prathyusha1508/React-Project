import React, { useState } from 'react';
const ThemeToggle=()=>{
    const[theme,setTheme]=useState('light');
    const themeChange=()=>{
        setTheme((prevTheme=>prevTheme==='light'? 'dark' : 'light'))
    }
    return( 
        <div style={{backgroundColor:theme==='light'? '#ffffff' : '#333333',color: theme==='light' ? '#333333' : '#ffffff',minHeight: '100vh', 
        transition: 'all 0.3s ease'}}>
            <button onClick={themeChange}>Change theme</button>
            <h2>current theme : {theme}</h2>



        </div>
    )
}
export default ThemeToggle;