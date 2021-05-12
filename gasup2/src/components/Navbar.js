import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    const [button, setButton]= useState(true);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick (false)   


    const showButton = ()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else setButton(true);
    };

    useEffect(()=>{
        showButton();
    },[]);
    window.addEventListener('resize', showButton)
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link
              to="/"
              className="navbar-logo text-white"
              onClick={closeMobileMenu}
            >
              GasUp <i className="fab fa-typo3" />
            </Link>
            <div className="menu-icon text-white" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-i">
                <Link
                  to="/"
                  className="nav-lin text-white"
                  onClick={closeMobileMenu}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/how-it-works"
                  className="nav-lin text-white"
                  onClick={closeMobileMenu}
                >
                  HOW IT WORKS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/partnership"
                  className="nav-lin text-white"
                  onClick={closeMobileMenu}
                >
                  PARTNERSHIP
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/complaints"
                  className="nav-lin text-white"
                  onClick={closeMobileMenu}
                >
                  COMPLAINTS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signup-signin"
                  className="nav-lin-mobile text-white"
                  onClick={closeMobileMenu}
                >
                  SIGNUP/SIGN IN
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/service-area"
                  className="nav-lin text-white"
                  onClick={closeMobileMenu}
                >
                  SERVICE AREA
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact-us"
                  className="nav-lin text-white"
                  onClick={closeMobileMenu}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
            {button && (
              <button className="btn btn-secondary">
                <Link
                  to="/signup-signin"
                  className="text-white"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </button>
            )}
          </div>
        </nav>
      </>
    ); 
}

export default Navbar;
