import './ServicesBlock.css';
import { slides } from '../data/slider';
import Button from './button';
import { HashLink } from 'react-router-hash-link';
import Icon from './parts/Icon';
import { useEffect } from 'react';

const ServicesBlock = () => {
    
    useEffect(() => {
        const titles = document.querySelectorAll(".services__title");
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, index * 200); // Napodobňuje delay: index * 0.2
                }
            });
        }, { threshold: 0.1 });

        titles.forEach(title => observer.observe(title));

        return () => {
            titles.forEach(title => observer.unobserve(title));
        };
    }, []);

    return (
        <section className='services-block'>
            <div className="container services-block__wrapper">
                <ul className="services-block__list">
                    {slides.map((service, index) => {
                        return (
                            <li key={index}>
                                <HashLink className='services__card' href={service.buttonLink} to={service.buttonLink} smooth={true} offset={-70}>
                                    <span className='services__icon'> <Icon icon={service.icon} /></span>
                                    <span className='services__title'>{service.title}</span>
                                </HashLink>
                            </li>
                        );
                    })}
                </ul>
                <div className='services-block__button'>
                    <Button variant='primary' url='/services' text='Prehľad služieb' icon="RightArrow" />
                    <Button variant='primary' url='/contact' text='Kontaktujte nás' icon="Mail" />
                </div>
            </div>
        </section>
    );
}

export default ServicesBlock;

