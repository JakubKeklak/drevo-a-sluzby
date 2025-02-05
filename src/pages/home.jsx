import React from 'react';
import './home.css';

import { slides } from '../data/slider';
import Hero from '../components/Hero';
import ColoredWrapper from '../components/coloredWrapper';
import Gallery from '../components/gallery';
import ContentBlock from '../components/ContentBlock';
import FaqsBlock from '../components/FaqsBlock';
import ServicesBlock from '../components/ServicesBlock';
import Video from '../assets/video1.mp4'
import Video2 from '../assets/video2.mp4'
import Video3 from '../assets/video3.mp4'
import HeroImage from '../assets/images/heroImage.jpg'
import HomePageImage1 from '../assets/images/homePageImage1.webp'
import HomePageImage2 from '../assets/images/homePageImage2.webp'
import HomePageImage3 from '../assets/images/homePageImage3.webp'

const Home = () => {
    return (
        <div className="home" >
            <Hero
                data={slides}
                image={HeroImage}
                title={
                    <>
                        <span>palivové drevo a komplexné služby</span>

                    </>
                }
                text={
                    <>
                        <span>
                            Ponúkame široký výber palivového dreva, ktoré vám zabezpečíme počas celého roka.
                            K tomu poskytujeme agro a komunálne služby, ako aj dovoz materiálov, čím pokryjeme všetky vaše potreby.
                            <br />
                            Spoľahnite sa na našu odbornú a spoľahlivú pomoc.
                        </span>

                    </>
                }
                video={Video}
                buttonUrl="/services"
                scrollButton={true}
            />
            <div className="home__content" name="servicesBlock">

                <ContentBlock
                    title="o nás"
                    text={
                        <>
                            <p>
                                Naša firma je spoľahlivým partnerom v oblasti predaja palivového dreva a širokého spektra služieb, ktoré zahŕňajú agro činnosti, dovoz materiálu a komunálne služby. S dlhoročnými skúsenosťami na trhu sa zameriavame na poskytovanie kvalitných produktov a služieb, ktoré spĺňajú potreby domácností, firiem a komunít. Naším cieľom je prispievať k pohodliu a efektivite našich zákazníkov, a zároveň ponúkať ekologické a udržateľné riešenia.
                            </p>
                            <p>
                                Vďaka našej flexibilite, spoľahlivosti a individuálnemu prístupu sme si vybudovali dôveru mnohých spokojných zákazníkov. Sme tu pre vás, aby sme vám uľahčili prácu, zabezpečili kvalitné produkty a služby a prispeli k vášmu komfortu a spokojnosti.
                            </p>
                        </>
                    }
                    image={HomePageImage1}
                />

                <ServicesBlock />

                <ContentBlock
                    title="Spracovanie dreva"
                    text={
                        <>
                            <p>
                                V oblasti predaja palivového dreva ponúkame kvalitné drevo z tvrdých aj mäkkých drevín, ktoré je ideálne na vykurovanie.
                                Drevo je starostlivo spracované, sušené a pripravené na okamžité použitie, čo zaručuje jeho vysokú výhrevnosť a
                                dlhú životnosť pri spaľovaní. Naši zákazníci si môžu vybrať zo širokej škály veľkostí a typov dreva, pričom kladieme
                                dôraz na rýchly a spoľahlivý servis vrátane dopravy priamo k vám domov.
                            </p>
                            <p>
                                Na výrobu štiepaného dreva používame kvalitnú fínsku štiepačku FARMI MASTERSPLIT WP 30 CS. Je to automat na rezanie a
                                štiepanie palivového dreva najväčšej akosti; a to pri vysokej bezpečnosti, efektivite a ľahkej obsluhe. Priečne rezanie
                                prebieha jednoducho a ticho pomocou reťazovej píly, ktorá sa pohybuje iba počas rezania. Následné štiepanie prebieha proti
                                tomu hydraulicky, pričom sa drevo štiepe na dve, prípadne štyri časti. Veľkosť štiepaného dreva sa dá nastaviť v rozmedzí 0-600mm.
                            </p>
                        </>
                    }
                    image={HomePageImage2}
                    imageRight={true}
                    video={Video2}
                />

                <FaqsBlock />

                <ContentBlock
                    title="Doplnkove služby"
                    text={
                        <>
                            <p>
                                Okrem toho poskytujeme komplexné agro služby, ktoré zahŕňajú obrábanie pôdy, siatie, zber plodín a ďalšie činnosti spojené s efektívnym hospodárením na poliach. Vďaka moderným technológiám a skúsenému tímu zabezpečujeme, že poľnohospodárske procesy prebiehajú rýchlo, presne a s maximálnym dôrazom na kvalitu.
                            </p>
                            <p>
                                Naša ponuka služieb sa rozširuje aj o dovoz rôznych materiálov, ako sú stavebné suroviny, sypké hmoty či iné produkty podľa požiadaviek zákazníka. Dopravu zabezpečujeme rýchlo a spoľahlivo, pričom naším cieľom je ušetriť čas a energiu našich klientov.
                            </p>
                            <p>
                                V oblasti komunálnych služieb sa staráme o čistotu a poriadok v obciach a mestách. Poskytujeme zber a likvidáciu odpadu, čistenie verejných priestranstiev a údržbu ciest, aby sme prispeli k bezpečnému a príjemnému prostrediu pre všetkých obyvateľov. Naše služby sú prispôsobené konkrétnym potrebám komunít, pričom kladieme dôraz na efektivitu a ohľaduplnosť voči životnému prostrediu.
                            </p>
                        </>
                    }
                    image={HomePageImage3}
                    video={Video3}

                />
                <ColoredWrapper color="quaternary">
                    <Gallery variant="row" data={slides} />
                </ColoredWrapper>
            </div>
        </div>
    );
};

export default Home;