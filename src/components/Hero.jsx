import './Hero.css';
import { useState, useEffect, useRef } from 'react';
import Button from './button';
import Image from './parts/Image';
import { Link } from 'react-scroll';
import Icon from './parts/Icon';

const Hero = ({ buttonVariant, image, text, buttonUrl, title, video, scrollButton }) => {
    const videoRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const buttonsRef = useRef(null);
    const [play, setPlay] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    }, []);

    useEffect(() => {
        const elements = [titleRef.current, textRef.current, buttonsRef.current];

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

    return (
        <div className="hero">
            <div className="hero__card">
                <div className="hero__card-wrapper">
                    {play === false ? (
                        <div className="hero__card-image">
                            <Image src={image} alt="" />
                        </div>
                    ) : (
                        <div className="hero__card-image">
                            <video
                                poster="https://images.pexels.com/photos/1136466/pexels-photo-1136466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                autoPlay
                                muted
                                loop
                                src={video}
                                ref={videoRef}
                            />
                        </div>
                    )}
                    <div className="hero__card-content container">
                        <div className="hero__content">
                            <h2 ref={titleRef} className="hero__content-title">{title}</h2>
                            <p ref={textRef} className="hero__content-text">{text}</p>
                            <div ref={buttonsRef} className="hero__content-buttons">
                                {buttonUrl && <Button text="služby" url={buttonUrl} icon="RightArrow" />}
                                <Button
                                    variant="tertiary"
                                    icon={play === false ? "Play" : "Stop"}
                                    buttonFunction={() => setPlay(!play)}
                                    buttonTitle="Play"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {scrollButton && (
                    <Link
                        className="hero__scroll-down"
                        to="servicesBlock"
                        activeClass="menuItem--active-services"
                        spy={true}
                        offset={window.innerWidth <= 600 ? -50 : -60}
                        smooth={true}
                        duration={1500}
                    >
                        <Icon icon="Down" />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Hero;
