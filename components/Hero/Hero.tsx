import './Hero.css';
import hero_image from '../assets/hero_image.png'
import new_icon from '../assets/new_icon.png'
import arrow_icon from '../assets/arrow_icon.png'
const Hero =()=>{
    return (

        <div className="hero">
            <div className='hero-left'>
                <h2>NEW ARRIVALS</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={new_icon} alt=""/>
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>

                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt=""/>
                </div>
                
            </div>

            <div className='hero-right'>
                <img src={hero_image} alt=""/>
            </div>
        </div>



    );
}

export default Hero;