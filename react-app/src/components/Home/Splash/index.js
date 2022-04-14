import './Splash.css';
import splashLogos from '../../../assets/splash-logos.png';
import splashFooterLogos from '../../../assets/splash-footer-logos.png';

import { NavLink } from 'react-router-dom';

function Splash () {
    return (
        <div id='splash'>
            <NavLink id='login' to='/login'>LOG IN</NavLink>
            <div>
                <img style={{ width: '90%' }} src={splashLogos} alt=''></img>
                <NavLink to='/signup'>SIGN UP FOR MYDISNEY+</NavLink>
                <p>Stream now. Terms Apply.</p>
                <img style={{ width: '90%' }} src={splashFooterLogos} alt=''></img>
            </div>
        </div>
    )
}

export default Splash;
