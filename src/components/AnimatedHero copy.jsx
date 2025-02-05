import './AnimatedHero.css'
import { useState, useEffect, useRef } from 'react'
import Image from './parts/Image'
import { Link } from 'react-scroll';


const AnimatedHero = ({ data, buttonVariant, icon, size, image, text, buttonUrl, title, video, scrollButton }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);
    const handleActiveIndex = (index) => {
        setActiveIndex(index);
        resetInterval();
    }
   
    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 2000);
    }

    useEffect(() => {
        resetInterval();
        return () => clearInterval(intervalRef.current); // Cleanup interval on component unmount
    }, [data.length]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    }, []);

    const heroSize = size ? 'animated-hero--small' : 'animated-hero--large';
    return (
        <div className={`animated-hero ${heroSize} `}>
            <div className="animated-hero__card">
                <div className='animated-hero__card-wrapper'>
                    {play === false ?
                        (
                            <div className="animated-hero__card-image animated-hero__card-image--active">
                                <Image src={image} alt="" />
                            </div>
                        )
                        :
                        (
                            <div className="animated-hero__card-image animated-hero__card-image--active">

                                <video poster="https://images.pexels.com/photos/1136466/pexels-photo-1136466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" autoPlay muted loop src={video} ref={videoRef} />



                            </div>
                        )
                    }
                   
                    <div className='animated-hero__card-content container'>
                        <div className='animated-hero__content'>
                            <h2 className='animated-hero__content-title'>
                                {title}
                            </h2>
                            <p className='animated-hero__content-text'>
                                
                                {text}
                            </p>

                           
                        
                        </div>
                        
                    </div>
                </div>
                {scrollButton &&
                    <Link className="animated-hero__scroll-down" to="servicesBlock" activeClass="menuItem--active-services" spy={true} offset={window.innerWidth <= 600 ? -50 : -60} smooth={true} duration={1500}>
                        <IoIosArrowDown />
                    </Link>
                }
            </div>

            { /*
            <div className='animated-hero__dots'>
                {data.map((_, index) => {
                    return (
                        <div key={index} className={`animated-hero__dot ${activeIndex === index ? 'animated-hero__dot--active' : ''}`} onClick={() => handleActiveIndex(index)}></div>
                    );
                })}
            </div>
            */}
        </div>
    );
}

export default AnimatedHero;