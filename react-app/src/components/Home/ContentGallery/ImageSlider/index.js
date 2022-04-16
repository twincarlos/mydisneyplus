import './ImageSlider.css';

function ImageSlider ({ contents }) {
    const contentsWithBanner = contents.filter(content => content.banner);

    return (
        <div id='image-slider-container'>
            <button className='movers left'>{"<"}</button>
            <div id='image-slider'>
                {
                    contentsWithBanner.map(content => (
                        <div className='content-container' key={content.id}>
                            <div className='banner-container' style={{ backgroundImage: `url('${content.banner}')` }}>
                                <img className='logo' src={content.logo}></img>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className='movers right'>{">"}</button>
        </div>
    );
}

export default ImageSlider;
