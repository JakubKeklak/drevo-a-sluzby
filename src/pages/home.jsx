import React from 'react';
import './home.css';
import Text from '../components/text';
import { slides } from '../data/slider';
import AnimatedHero from '../components/AnimatedHero';
import { blogs } from '../data/blogs';
import BlogWrapper from '../components/BlogWrapper';
import BlogCard from '../components/BlogCard';
import ColoredWrapper from '../components/coloredWrapper';
import Gallery from '../components/gallery'; 
import ContentBlock from '../components/ContentBlock';
import FaqsBlock from '../components/FaqsBlock';
import ServicesBlock from '../components/ServicesBlock';

const Home = () => {
    return (
        <div className="home" >
            <AnimatedHero data={slides} image="https://freedomfirewood.com/wp-content/uploads/packaged-firewood.jpg"
            title={
                <>
                <span>Drevo</span>
                                        <span>a</span>
                                        <span>Sluzby</span>
                    
                </>
            }
            text={
                <>
                    Kvalitné palivové drevo, spoľahlivé agro a komunálne služby. <br></br>
                    Postaráme sa o vaše teplo, pozemky aj okolie s dôrazom na kvalitu a spoľahlivosť. <br></br>
                    <br></br><b>Vaša spokojnosť je našou prioritou.</b>
                </>
            }
            buttonUrl="/services"
            scrollButton={true}
            />
<div className="home__content">
            <ServicesBlock />
            
            <ContentBlock />

            <FaqsBlock />

            <ContentBlock  imageRight={true}/>
            
            <Gallery variant="row" data={slides} />

            <ColoredWrapper color="quaternary">
                <div className="container">
                    <BlogWrapper
                        title="Zaujimavosti"
                        buttonText="Všetky články"
                        buttonUrl="/blog"
                    >
                        {blogs.slice(0, 4).map((blog, index) => (
                            <BlogCard key={index} blog={blog} />
                        ))}
                    </BlogWrapper>
                </div>
            </ColoredWrapper>
            </div>
        </div>
    );
};

export default Home;