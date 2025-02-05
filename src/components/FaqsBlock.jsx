import './FaqsBlock.css'
import { motion } from "motion/react"

const FaqsData = [
    {
        title: '1000ton',
        text: 'spracovaneho dreva'
    },
    {
        title: '100ha',
        text: 'spracovanej ornej pody'
    },
    {
        title: '200km',
        text: 'ocistenych cestnych komunikacii'
    },
    {
        title: '500+',
        text: 'spokojnych zakaznikov'
    }
]

const FaqsBlock = () => {
    return (
        <section className="faqs-block">
            <div className="container faqs-block__wrapper">
                <ul className="faqs-block__list">
                    {FaqsData.map((faq, index) => (
                        <li className='faqs__card' key={index}>
                            <span className='faqs__title'>{faq.title}</span>
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .5, delay: index * .2 }}
                                viewport={{ once: true }}
                                className='faqs__text'>
                                {faq.text}
                            </motion.p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default FaqsBlock;