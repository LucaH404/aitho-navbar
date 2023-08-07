import React, { useCallback, useState } from 'react'
import './Navbar.css'
import navIconLight from './../../icon/aitho-icon.png'
import navIconDark from './../../icon/aitho-icon-white.png'
import bell from './../../icon/bell-black.png'
import mark from './../../icon/mark.png'
import { Link, Route, Routes } from 'react-router-dom'
import TableAnt from '../Comments/TableLogic'
import { DarkModeContext } from '../useDarkmode/DarkModeContext'
const Navbar = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const handleBell = () => {
        alert("you clicked the english alert ;)");
    }
    const handleMark = () => {
        alert("hai premuto il pulsante");
    }
    const handleLogo = useCallback((theme: string) => {
        return theme === 'light' ? navIconLight : navIconDark;
    }, [theme])
    const handleDark = useCallback((theme: string) => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }, [theme])
  return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light p-0 ${theme}-mode`} id="navbar">
                <img className="nav-icon" src={handleLogo(theme)}/>

                <div className="nav-wrapper w-100" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <div className="row w-100">
                            <div className="p-0 col-xs-1 col-sm-1 col-md-2 col-lg-1 col-xl-1 col-xxl-1">
                                <li className="nav-item active h5 p-0 m-0 w-100">
                                    <Link to="/Home" className={`nav-link nav-link-${theme} p-0`} >Home</Link>
                                </li>
                            </div>
                            <div className="p-0 col-xs-1 col-sm-5 col-md-3 col-lg-2 col-xl-2 col-xxl-1">
                                <li className="nav-item h5 m-0 p-0">
                                    <a className={`nav-link nav-link-${theme}`} href="#">Dashboard</a>  
                                </li>
                            </div>
                            <div className="p-0 col-xs-1 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2">
                                <li className="nav-item h5 m-0 p-0">
                                    <Link to="/comments" className={`nav-link nav-link-${theme} course`}>Commenti</Link>
                                </li>
                            </div>
                        </div>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <div className="form-check form-switch d-flex align-items-center">
                            <input className="form-check-input m-1" type="checkbox" role="switch" id="darkmode" onClick={() => handleDark(theme)}/>
                            <label className="form-check-label text-center m-1" htmlFor="flexSwitchCheckDefault" >Darkmode</label>
                        </div>
                        <a className={`bell-props-${theme} m-2`} href="#" id="bell" onClick={handleBell}><img src={bell}/></a>
                    </form>
                </div>
            </nav>
            <>
                <div>
                    <button className="btn btn-mark" id="mark"><img src={mark} onClick={handleMark}/></button>
                </div>
            </>
            <>
                <Routes>
                    <Route path="/Home"/>
                    <Route path="/comments" element={<TableAnt/>} />
                </Routes>
            </>
        </>
  )
}

export default Navbar;