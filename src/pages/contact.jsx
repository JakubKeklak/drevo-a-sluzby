import './contact.css';
import Form from '../components/form';
import { ReactComponent as Facebook } from '../svg/facebook.svg'
import Heading from '../components/typography/Heading';
import Text from '../components/text';
import SmallHero from '../components/SmallHero'

const Contact = () => {
  return (
    <>
      <SmallHero
        title="Spojte sa s nami – sme tu pre vás!"
        text={
          <p>
            Máte otázky, potrebujete poradiť alebo si chcete objednať? Neváhajte nás kontaktovať! Sme tu,
            aby sme vám poskytli všetky potrebné informácie a pomohli s výberom toho najlepšieho riešenia. Zavolajte nám,
            napíšte e-mail alebo nás navštívte osobne – radi vás privítame.
          </p>
        }
        bgText="Kontakt"
      />
      <div className="contact container">
        <div className="contact__wrapper">
          <div className="contact__info">
            <Heading tag="h2" className='contact__title'>Informácie</Heading>
            <ul className='contact__list'>
              <li><span>Ladislav Cajko</span></li>
              <li><span>ICO:</span><span>45852 3547</span></li>
              <li><span>DIC:</span><span>4569 3254</span></li>
              <li><span>Tel. kontakt:</span><span>+421 908 801 906</span></li>
              <li><span>Mail:</span><span>info@www.drevoasluzby.sk</span></li>
              <Facebook className="contact__icon" />
            </ul>
            <div className='contact__map'>
              <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162.608281556795!2d20.62298077433552!3d49.30041015433986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e12659a5a6597%3A0xeaf3193e336b05c1!2sHniezdne%20269%2C%20065%2001%20Hniezdne!5e0!3m2!1ssk!2ssk!4v1727945628770!5m2!1ssk!2ssk"  ></iframe>
            </div>
          </div>
          <div className="contact__form">
            <Heading tag="h2" className='contact__title'>Kontaktný formulár </ Heading>
            <Text margin={false}>
              Ak máte nejaké otázky, neváhajte nás kontaktovať. <br />
              Vyplnte nasledujúci formulár a my sa Vám čo najskôr ozveme.
            </Text>

            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;