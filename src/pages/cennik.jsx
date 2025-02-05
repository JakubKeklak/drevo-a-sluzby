import './cennik.css'

import { useContext } from 'react'
import { ProductContext } from '../context/dataContext'
import ProductCard from '../components/productCard'
import Text from '../components/text'
import Heading from '../components/typography/Heading';
import SmallHero from '../components/SmallHero'


const Cennik = () => {

    const { productData, pushProduct, disabledButton } = useContext(ProductContext);

    return (
        <>
            <SmallHero
                title="Zima vás neprekvapí!"
                text={
                    <p>
                        Zabezpečte si teplo domova s naším kvalitným palivovým drevom! Ponúkame široký výber druhov dreva za výhodné ceny, ideálne na vykurovanie aj dlhé zimné večery. Naše drevo je starostlivo pripravené, ekologické a dostupné v rôznych baleniach podľa vašich potrieb. Objednajte si ešte dnes a užite si spoľahlivé teplo počas celej zimy!
                    </p>
                }

                bgText="Cenník"
            />
            <section className="cennik__wrapper container">

                <div className="cennik__content">
                    <div className='cennik__products'>
                        <Heading tag="h3" className='cennik__title'>Aktualna ponuka palivoveho dreva</Heading>
                        <div className='cennik__text'>
                            <Text>
                                Vyberte si z našej ponuky palivového dreva a zaručte si útulné zimné večery.
                            </Text>
                            <Text>
                                Uvedené ceny sú s DPH a platia pre jeden, voľne uložený priestorový meter (prm).
                            </Text>
                        </div>
                        <div className="cennik__products-list">
                            {productData.filter(product => product.item === 'wood').map((product, index) => {
                                return <ProductCard key={index} product={product} pushProduct={pushProduct} disabled={disabledButton(product)} />

                            })}
                        </div>

                    </div>
                    <div className='cennik__products'>
                        <Heading tag="h3" className='cennik__title'>Prislusenstvo</Heading>
                        <div className='cennik__text'>
                            <Text>
                                Zjednodušte si prácu s našimi drevenými trieskami a klátmi na rúbanie – spoľahlivé, odolné a vždy k dispozícii!
                            </Text>
                        </div>
                        <div className="cennik__products-list">
                            {productData.filter(product => product.item === 'other').map((product, index) => {
                                return <ProductCard key={index} product={product} pushProduct={pushProduct} disabled={disabledButton(product)} />

                            })}
                        </div>
                    </div>
                    <Text >
                        Doprava v rámci okresu Stará Ľubovňa: 0,65€ <br />
                        Doprava mimo okresu Stará Ľubovňa: dohodou
                    </Text>
                </div>
            </section >
        </>
    )
}

export default Cennik