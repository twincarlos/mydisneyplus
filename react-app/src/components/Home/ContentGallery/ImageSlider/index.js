import './ImageSlider.css';

function ImageSlider ({ contents }) {
    return (
        <div id='image-slider-container'>
            <div id='image-slider'>
                { contents.map((content, idx) => idx < 10 && <img src={content.banner} alt=''></img>) }
            </div>
        </div>
    );
}

export default ImageSlider;
