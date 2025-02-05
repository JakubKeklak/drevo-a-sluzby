import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from './button';
import Text from './text';

import './form.css'; // Add your CSS for styling the modal

const ContactForm = ({ productSummaries, sum, type }) => {
    const template = type === 'product' ? 'template_1qsgma7' : 'template_pxd5m49';
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        gdpr: 'Suhlasim so spracovanim osobnych udajov, na ucel spatneho kontaktu.'
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [resultMessage, setResultMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let templateParams = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
            gdpr: formData.gdpr,
        };

        if (type === 'product') {
            const emailBody = productSummaries.map(product =>
                `Polozka: ${product.name} - ${product.descriptionValue}, Mnozstvo: ${product.quantity}, Cena za polozku: ${product.price * product.quantity}€`
            ).join('\n') + `\n\n Celkova suma: ${sum}€`;

            templateParams = {
                ...templateParams,
                products: emailBody
            };
        }

        emailjs.init("39ZQDLzz2zQW1ByIg");
        emailjs.send('service_8ejd911', template, templateParams)
            .then((result) => {
                setResultMessage('Sprava sa uspesne odoslala. Dakujeme, budeme vas kontaktovat.');
                setModalVisible(true);
            }, (error) => {
                setResultMessage('Spravu sa nepodarilo odoslat, skuste to este raz prosim.');
                setModalVisible(true);
            });
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: '',
            gdpr: 'Suhlasim so spracovanim osobnych udajov, na ucel spatneho kontaktu.'
        });
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="form__wrapper">
            <form onSubmit={handleSubmit} >
                <div className='form__item'>
                    <label>
                        <input
                            type="text"
                            name="name"
                            placeholder=""
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <span className='form__item-text'>Meno</span>
                    </label>
                </div>
                <div className='form__item'>
                    <label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder=""
                            value={formData.phone}
                            onChange={handleChange}

                        />
                        <span className='form__item-text' >Tel. cislo</span>
                    </label>
                </div>
                <div className='form__item'>
                    <label>
                        <input
                            type="email"
                            name="email"
                            placeholder=""
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <span className='form__item-text' >Email</span>
                    </label>
                </div>
                    {type &&
                        <div className='form__address'>
                            <Text>Palivove drevo si mozete objednat aj s dopravou.</Text>
                            <Text> Doprava v rámci okresu Stará Ľubovňa: 0,65€ mimo okresu Stará Ľubovňa: dohodou</Text>
                            
    
                            <div className='form__address-wrapper'>
                                <div className='form__item'>
                                    <label>
                                        <input
                                            type="text"
                                            name="city"
                                            placeholder=""
                                            value={formData.city}
                                            onChange={handleChange}
                                           
                                        />
                                        <span className='form__item-text' >Mesto</span>
                                    </label>
                                </div>
                                <div className='form__item'>
                                    <label>
                                        <input
                                            type="text"
                                            name="street"
                                            placeholder=""
                                            value={formData.street}
                                            onChange={handleChange}
                                           
                                        />
                                        <span className='form__item-text' >Ulica</span>
                                    </label>
                                </div>
                                <div className='form__item'>
                                    <label>
                                        <input
                                            type="text"
                                            name="number"
                                            placeholder=""
                                            value={formData.number}
                                            onChange={handleChange}
                                            
                                        />
                                        <span className='form__item-text' >Cislo domu</span>
                                    </label>
                                </div>
                                <div className='form__item'>
                                    <label>
                                        <input
                                            type="text"
                                            name="psc"
                                            placeholder=""
                                            value={formData.psc}
                                            onChange={handleChange}
                                            
                                        />
                                        <span className='form__item-text' >PSC</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    }
                <div className='form__item form__item--textarea'>
                    <span className='form__item-text'>Sprava:</span>
                    <textarea
                        name="message"
                        placeholder=""
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form__checkbox'>
                    <label for="gdpr">
                    <input type="checkbox" name="gdpr" id="gdpr" required value={formData.gdpr}
                        onChange={handleChange} />
                        <div className='checkbox'></div>
                        <Text margin={false}>Suhlasim so spracovanim osobnych udajov, na ucel spatneho kontaktu.</Text>
                    </label>
                </div>

                <Button text="Odoslat" variant="secondary" icon="SentMail" submit={true}/>
            </form>

            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>{resultMessage}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactForm;