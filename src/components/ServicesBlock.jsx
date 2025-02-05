import './ServicesBlock.css'
import { slides } from '../data/slider'
import Button from './button';
import { HashLink } from 'react-router-hash-link';
import { motion } from "motion/react"
import Icon from './parts/Icon';

const ServicesBlock = () => {
    return (
        <section className='services-block'>
            <div className="container services-block__wrapper">
                <ul className="services-block__list">
                    {slides.map((service, index) => {
                        return (
                            <li key={index}>
                                <HashLink className='services__card'  href={service.buttonLink} to={service.buttonLink} smooth={true}  >
                                    <span className='services__icon'> <Icon icon={service.icon} /></span>
                                    <motion.span
                                        initial={{ opacity: 0, y: -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: .5, delay: index * .2 }}
                                        viewport={{ once: true }}
                                        className='services__title'>{service.title}</motion.span>
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
