import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const [setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () =>setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton)
  return (
      <>
      <nav className='navbar '>
          <div className='navbar-container'>
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                 <img className='logo' src='images/logo.png' alt='logo1'/>
                 <img className='logo2' src='images/logo2.png' alt='logo2'/>
              </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ?  'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='calendar' className='nav-links' onClick={closeMobileMenu}>
                             <p className='Zurhai'>Зурхай</p>
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to='/tsag-agaar' className='nav-links' onClick={closeMobileMenu}> 
                            <p className='weather'>Цаг агаар</p>
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to='/valve' className='nav-links' onClick={closeMobileMenu}> 
                            <p className='dolla'>Вальтын ханш</p>
                        </Link>
                    </li>
                </ul>
                {/* {button && <Button buttonStyle = 'btn--outline'> SHIBALAA</Button>} */}
          </div>
      </nav>
      </>
  )
}

export default Navbar;
