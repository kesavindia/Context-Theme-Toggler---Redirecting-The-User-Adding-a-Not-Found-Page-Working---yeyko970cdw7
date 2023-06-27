import React,{useContext,useEffect,useState} from 'react';
import { ThemeContext} from './ThemeProvider';

const LocalThemedBox = () => {
    const {theme} = useContext(ThemeContext)
    const [localTheme, setLocaltheme] = useState(theme)
    useEffect(()=>{
        setLocaltheme(theme)
    },[theme])
    const changeLocalTheme = ()=>{
        setLocaltheme(localTheme=='light'?'dark':"light")
    }
return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box"
    className={`bg-${localTheme}`}>
        {/* Write code below this line */}
        <p className={`txt-${localTheme}`} id="local-themed-text-container">anything</p>
        <button onClick={changeLocalTheme} id='local-theme-toggler' className={`btn btn-${localTheme}`}>
            Toggle local theme to{localTheme=='light'?'dark':'light'}</button>
    </div>
)
}

export { LocalThemedBox }