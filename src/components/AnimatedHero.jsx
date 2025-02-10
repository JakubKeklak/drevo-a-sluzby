import './AnimatedHero.css'
import { useState, useEffect, useRef } from 'react'
import { motion } from "motion/react"
import Image from './parts/Image'


const AnimatedHero = ({ data, buttonVariant, icon, size, image, text, buttonUrl, title, video, scrollButton }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);
    const titleRef = useRef(null);
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

    useEffect(() => {
        const elements = [titleRef.current];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 1 });

        elements.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const heroSize = size ? 'animated-hero--small' : 'animated-hero--large';
    return (
        <div className={`animated-hero ${heroSize} `}>
            <div className="animated-hero__card">
                {data.map((slide, index) => {
                    return (
                        <div key={index} className={`animated-hero__card-image ${activeIndex === index ? 'animated-hero__card-image--active' : ''}`}>
                            <Image src={slide.image} alt="" />
                        </div>
                    );
                })}
                <div className='animated-hero__card-content container'>
                    <div className='animated-hero__content'>
                        <h2 className='animated-hero__content-title' ref={titleRef}>
                            {title}
                        </h2>
                        <p className='animated-hero__content-text'>
                            {data.map((slide, index) => {
                                return (
                                    <motion.span 
                                    initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .3 }}
                                
                                key={index} className={`animated-hero__text ${activeIndex === index ? 'animated-hero__text--active' : ''}`}>
                                        {slide.title}
                                    </motion.span>
                                );
                            }
                            )}
                            {text}
                        </p>
                    </div>
                    <div className='animated-hero__dots'>
                        {data.map((_, index) => {
                            return (
                                <div key={index} className={`animated-hero__dot ${activeIndex === index ? 'animated-hero__dot--active' : ''}`} onClick={() => handleActiveIndex(index)}></div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimatedHero;