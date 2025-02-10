import React, { useEffect, useRef, useState } from 'react';
import './ServicesDetailBlock.css';
import Heading from './typography/Heading';
import Text from './text';

const ServicesDetailBlock = ({ id, index, title, text, buttons, gallery, name }) => {
    const titleRowRef = useRef(null);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !animated) {
                titleRowRef.current.style.width = '50%';
                setAnimated(true);
                observer.disconnect(); // Zastaví sledovanie po animácii
            }
        }, { threshold: 1 });

        if (titleRowRef.current) {
            observer.observe(titleRowRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [animated]);

    return (
        <section className="services-detail-block" id={id} name={name}>
            <div className="services-detail-block__wrapper container">
                <div className="services-detail-block__content">
                    <div className="services-detail-block__title">
                        <div 
                            ref={titleRowRef}
                            className="services-detail-block__title-row"
                            style={{ width: 0, transition: 'width 0.5s ease-in-out' }}
                        ></div>
                        <Heading tag="h2">{title}</Heading>
                    </div>
                    <div className="services-detail-block__text">
                        <Text>{text}</Text>
                    </div>
                    <div className="services-detail-block__buttons">
                        {buttons}
                    </div>
                </div>
                <div className="services-detail-block__gallery">
                    {gallery}
                </div>
            </div>
            <div className="services-detail-block__divider"></div>
        </section>
    );
};

export default ServicesDetailBlock;
