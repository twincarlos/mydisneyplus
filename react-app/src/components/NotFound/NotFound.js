import './NotFound.css';
import disneyPlusLogo from '../../assets/disney-plus-logo.png';
import stitch from '../../assets/stitch.gif';

import { useHistory } from 'react-router-dom';

function NotFound () {
    const history = useHistory();

    return (
        <div id='not-found'>
            <nav>
                <img onClick={() => history.push('/')} style={{ width: 100, marginLeft: 40, cursor: 'pointer' }} src={disneyPlusLogo} alt=''></img>
            </nav>
            <h2 style={{ marginBottom: 30 }}>Oops! This is awkward...</h2>
            <img style={{ width: '50vw',  borderRadius: 10 }} src={stitch} alt=''></img>
        </div>
    );
}

export default NotFound;
