import './AnimatedHero.css'
import { useState, useEffect, useRef } from 'react'
import Image from './parts/Image'

const AnimatedHero = ({ data, buttonVariant, icon, size, image, text, buttonUrl, title, video, scrollButton }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);

    const [animateText, setAnimateText] = useState(false);

    const handleActiveIndex = (index) => {
        setActiveIndex(index);
        resetInterval();
        triggerTextAnimation();
    };

    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
            triggerTextAnimation();
        }, 2000);
    };

    const triggerTextAnimation = () => {
        setAnimateText(false);
        setTimeout(() => {
            setAnimateText(true);
        }, 50); // Small delay to retrigger animation
    };

    useEffect(() => {
        resetInterval();
        return () => clearInterval(intervalRef.current);
    }, [data.length]);

   

    

    const heroSize = size ? 'animated-hero--small' : 'animated-hero--large';

    return (
        <div className={`animated-hero ${heroSize} `}>
            <div className="animated-hero__card">
                {data.map((slide, index) => (
                    <div key={index} className={`animated-hero__card-image ${activeIndex === index ? 'animated-hero__card-image--active' : ''}`}>
                        <Image src={slide.image} alt="" />
                    </div>
                ))}
                <div className='animated-hero__card-content container'>
                    <div className='animated-hero__content'>
                        <h2 className='animated-hero__content-title'>
                            {title}
                        </h2>
                        <p className='animated-hero__content-text'>
                            {data.map((slide, index) => (
                                <span
                                    key={index}
                                    className={`animated-hero__text ${activeIndex === index ? 'animated-hero__text--active' : ''} ${animateText ? 'fade-slide' : ''}`}
                                >
                                    {slide.title}
                                </span>
                            ))}
                            {text}
                        </p>
                    </div>
                    <div className='animated-hero__dots'>
                        {data.map((_, index) => (
                            <div key={index} className={`animated-hero__dot ${activeIndex === index ? 'animated-hero__dot--active' : ''}`} onClick={() => handleActiveIndex(index)}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedHero;
