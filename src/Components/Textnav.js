import '../App.css';
import React,{useState} from 'react'
const Textnav = (props) => {
    const [mode, setMode] = useState("light")
    const [btnmode, setBtnmode] = useState("Enable DarkMode")
    const toggleMode= ()=>{
        if(mode === "light"){
        setMode("dark")
        setBtnmode("Light Mode")
        }
        else{
            setMode("light")
            setBtnmode("Dark Mode")
        }
    }
    return (
        <>
        <div  className={`navContainer ${mode}`}>
            <nav className="navbar">
                <li>{props.title}</li>
                <li>{props.home}</li>
            </nav>
            <div className="calender-footer">
                <div onClick={props.onchange}>
                <div onClick={toggleMode}className="dark-mode-switch">
                    <div  className="dark-mode-switch-ident">
                    </div>
                </div>
                </div>
                <div className="toggle">
                    <span>{btnmode}</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Textnav;