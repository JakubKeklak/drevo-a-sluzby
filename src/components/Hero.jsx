import './Hero.css'
import { useState, useEffect, useRef } from 'react'
import Button from './button'
import Image from './parts/Image'
import { Link } from 'react-scroll';
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "motion/react"

const Hero = ({ buttonVariant, image, text, buttonUrl, title, video, scrollButton }) => {
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    }, []);

    return (
        <div className={`hero  `}>
            <div className="hero__card">
                <div className='hero__card-wrapper'>
                    {play === false ?
                        (
                            <div className="hero__card-image">
                                <Image src={image} alt="" />
                            </div>
                        )
                        :
                        (
                            <div className="hero__card-image ">
                                <video poster="https://images.pexels.com/photos/1136466/pexels-photo-1136466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" autoPlay muted loop src={video} ref={videoRef} />
                            </div>
                        )
                    }
                    <div className='hero__card-content container'>
                        <div className='hero__content'>

                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .3 }}
                                viewport={{ once: true }}
                                className='hero__content-title'>
                                {title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .3, delay: 0.2 }}
                                viewport={{ once: true }} 
                                className='hero__content-text'>
                                {text}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .3, delay: 0.4 }}
                                viewport={{ once: true }}  
                                className='hero__content-buttons'>
                                {buttonUrl &&
                                    <Button text='Viac informacii' url={buttonUrl} variant={buttonVariant} icon="FaAngleRight" />
                                }
                                <Button variant={buttonVariant} icon={play === false ? "GrPlayFill" : 'GrStopFill'} buttonFunction={() => setPlay(!play)} />
                            </motion.div>
                        </div>
                    </div>
                </div>
                {scrollButton &&
                    <Link className="hero__scroll-down" to="servicesBlock" activeClass="menuItem--active-services" spy={true} offset={window.innerWidth <= 600 ? -50 : -60} smooth={true} duration={1500}>
                        <IoIosArrowDown />
                    </Link>
                }
            </div>
        </div>
    );
}

export default Hero;