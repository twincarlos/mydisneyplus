import './Carousel.css';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Carousel ({ contents }) {
    const history = useHistory();
    const [position, setPosition] = useState(1);
    const [right, setRight] = useState('-3');

    const whichPosition = () => {
        position === contents.length ? setPosition(1) : setPosition(position + 1);
        right === ((((contents.length - 1) * 91.8).toFixed(1)) - 3).toString() ? setRight('-3') : setRight(((Number(right) + 91.8).toFixed(1)).toString());
    };

    return (
        <div id='carousel-container'>
            { position > 1 && <button className='movers left' onClick={() => {
                setPosition(position - 1);
                setRight((Number(right) - 91.8).toFixed(1));
            }}><i className="fas fa-chevron-left"></i></button> }
            <div id='carousel' style={{ right: `${right}vw` }} className={`position${position}`} onAnimationEnd={whichPosition}>
                {
                    contents.map(content => (
                        <div onClick={() => history.push(`/content/${content.id}`)} className='content-container' key={content.id}>
                            <div className='banner-container' style={{ backgroundImage: `url('${content.banner}')` }}>
                                <img className='logo' src={content.logo} alt=''></img>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div id='carousel-dots'>
                {
                    contents.map((content, idx) => <i onClick={() => {
                        setPosition(idx + 1);
                        setRight((((idx * 91.8).toFixed(1)) - 3).toString());
                    }} key={content.id} className={`fas fa-circle ${position === idx + 1 ? 'current' : null}`}></i>)
                }
            </div>
            { position < 10 && <button className='movers right' onClick={() => {
                setPosition(position + 1);
                setRight((Number(right) + 91.8).toFixed(1));
            }}><i className="fas fa-chevron-right"></i></button> }
        </div>
    );
}

export default Carousel;
