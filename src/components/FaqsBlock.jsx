import './FaqsBlock.css'


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
                            <p
                               
                                className='faqs__text'>
                                {faq.text}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default FaqsBlock;