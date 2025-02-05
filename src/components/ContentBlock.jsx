import './ContentBlock.css';
import { useState } from 'react';
import Heading from './typography/Heading';
import Text from './text';
import Image from './parts/Image';
import Button from './button';
import { motion } from "motion/react"

const ContentBlock = ({ title, text, image, imageRight, video }) => {

    const variant = imageRight ? 'content-block--image-right' : '';
    const [play, setPlay] = useState(false);

    return (
        <section className={`content-block ${variant} `}>
            <div className='content-block__wrapper container'>
                <article className='content-block__content'>
                    <div className='content-block__heading'>
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            transition={{ duration: .5, delay: .5 }}
                            className='content-block__heading-line'></motion.div>
                        <Heading tag="h2">{title}</Heading>
                    </div>
                    <Text>
                        {text}
                    </Text>
                </article>
                {image &&
                    <div className='content-block__image'>
                        <Image src={image} alt="" />
                        {video &&
                            <div className="content-block__play-button">
                                <Button icon="Play" buttonFunction={() => setPlay(!play)} variant="tertiary" buttonTitle='Play' />
                            </div>
                        }
                    </div>
                }
            </div>
            {play === true &&
                <div className="content-block__video">
                    <div className="video-close-button">
                        <Button icon="Close" buttonFunction={() => setPlay(false)} variant="tertiary" />
                    </div>
                    <div className="video-content">

                        <video muted loop src={video} controls />
                    </div>

                </div>
            }
        </section>
    );
}

export default ContentBlock;