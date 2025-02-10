import './ContentBlock.css';
import { useState, useEffect, useRef } from 'react';
import Heading from './typography/Heading';
import Text from './text';
import Image from './parts/Image';
import Button from './button';

const ContentBlock = ({ title, text, image, imageRight, video }) => {
    const variant = imageRight ? 'content-block--image-right' : '';
    const [play, setPlay] = useState(false);
    const headingLineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                headingLineRef.current.style.height = '100%';
            }
        }, { threshold: 1 });

        if (headingLineRef.current) {
            observer.observe(headingLineRef.current);
        }

        return () => {
            if (headingLineRef.current) {
                observer.unobserve(headingLineRef.current);
            }
        };
    }, []);

    return (
        <section className={`content-block ${variant}`} >
            <div className='content-block__wrapper container'>
                <article className='content-block__content'>
                    <div className='content-block__heading'>
                        <div 
                            ref={headingLineRef}
                            className='content-block__heading-line'
                            style={{ height: 0, transition: 'height 0.5s ease-in-out 0.5s' }}
                        ></div>
                        <Heading tag="h2">{title}</Heading>
                    </div>
                    <Text>{text}</Text>
                </article>
                {image && (
                    <div className='content-block__image'>
                        <Image src={image} alt="" />
                        {video && (
                            <div className="content-block__play-button">
                                <Button icon="Play" buttonFunction={() => setPlay(!play)} variant="tertiary" buttonTitle='Play' />
                            </div>
                        )}
                    </div>
                )}
            </div>
            {play && (
                <div className="content-block__video">
                    <div className="video-close-button">
                        <Button icon="Close" buttonFunction={() => setPlay(false)} variant="tertiary" />
                    </div>
                    <div className="video-content">
                        <video muted loop src={video} controls />
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContentBlock;
