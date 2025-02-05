import React from 'react';
import './services.css'
import ServicesDetailBlock from '../components/ServicesDetailBlock'
import { Link } from 'react-scroll';
import Button from '../components/button'
import Gallery from '../components/gallery'
import { slides } from '../data/slider'
import AnimatedHero from '../components/AnimatedHero';
import Text from '../components/text'


const services = () => {
  return (
    <main className="services">
      <AnimatedHero
        data={slides}
        size="small"
        title={
          <>
            Váš partner pre
          </>
        }
      />
      <div className="services__navigation ">
        <ul className="container">
          <li><Link className="menuItem" to="vyroba-a-dovoz-stiepane-drevo" activeClass="menuItem--active-services" spy={true} offset={-70} smooth={true} >Palivove drevo</Link></li>
          <li><Link className="menuItem" to="komunalne-sluzby" activeClass="menuItem--active-services" spy={true} offset={-70} smooth={true} >Komunálne služby</Link></li>
          <li><Link className="menuItem" to="agro-sluzby" activeClass="menuItem--active-services" spy={true} offset={-70} smooth={true} >Agro služby</Link></li>
          <li><Link className="menuItem" to="dovoz-materialu" activeClass="menuItem--active-services" spy={true} offset={-70} smooth={true}>Dovoz materiálu</Link></li>
        </ul>
      </div>

      <ServicesDetailBlock
        id="vyroba-a-dovoz-stiepane-drevo"
        name="vyroba-a-dovoz-stiepane-drevo"
        index={1}
        title="VÝROBA A DOVOZ ŠTIEPANÉHO DREVA"
        text={
          <>
            <p>
              Kvalitné palivové drevo pre váš domov – rýchlo, spoľahlivo a za férové ceny. Ponúkame profesionálnu výrobu a dovoz štiepaného dreva priamo k vám, aby ste mali vždy dostatok tepla počas celej sezóny.
            </p>
            <p>
              <b>Naša ponuka:</b>
            </p>
            <ul>
              <li><b>Mäkké štiepané palivové drevo –</b> ideálne na rýchle rozkurovanie a kratšie horenie.</li>
              <li><b>Tvrdé štiepané palivové drevo –</b> dlhšie horenie, vyššia výhrevnosť, vhodné na zimné vykurovanie.</li>
              <li><b>Dovoz štiepaného palivového dreva –</b> doručenie až k vašim dverám podľa dohody.</li>
            </ul>
            <p>
              <b>Doprava a spôsob dodania:</b>
            </p>
            <p>
              🚚 <b>Rýchla a spoľahlivá doprava –</b> drevo vám privezieme v dohodnutom termíne priamo na určené miesto.<br />
              📦 <b>Ukladané drevo –</b> precízne poukladané v paletách pre jednoduché skladovanie a manipuláciu.<br />
              🪵 <b>Sypané drevo –</b> voľne sypané drevo v dohodnutom objeme, ideálne pre tých, ktorí si ho chcú uložiť sami.
            </p>
            <p>
              Zabezpečte si spoľahlivý zdroj tepla s kvalitným drevom za výhodné ceny! 🔥 Kontaktujte nás ešte dnes a dohodnite si dodávku dreva presne podľa vašich potrieb.
            </p>
          </>
        }
        buttons={
          <>
            <Button text="ponuka dreva" variant="tertiary" url="/cennik" />
            <Button text="kontaktujte nás" variant="tertiary" url="/contact" />
          </>
        }
        gallery={< Gallery data={slides} />}
      />

      < ServicesDetailBlock
        id="komunalne-sluzby"
        name="komunalne-sluzby"
        index={2}
        title="KOMUNÁLNE SLUŽBY"
        text={
          <>
            <p>
              Poskytujeme profesionálne komunálne služby pre mestá, obce, firmy aj súkromné osoby. Zabezpečíme údržbu zelene a verejných priestranstiev, aby vaše prostredie bolo vždy čisté, estetické a bezpečné.
            </p>
            <p>
              <b>Naše služby zahŕňajú:</b>
            </p>
            <ul>
              <li>🌿 <b>Kosenie trávnatých plôch –</b> údržba parkov, dvorov, záhrad a ďalších plôch v pravidelnej starostlivosti.</li>
              <li>🚜 <b>Mulčovanie trvalo trávnatých plôch –</b> efektívne udržiavanie porastov a prevencia pred zarastením burinou.</li>
              <li>🌳 <b>Ošetrovanie okrasných krovín a stromov –</b> odborný rez, tvarovanie a starostlivosť o dreviny.</li>
            </ul>
            <p>
              <b>Spoľahnite sa na odbornú starostlivosť o verejné aj súkromné plochy. Kontaktujte nás a dohodnite si služby podľa vašich potrieb!</b>
            </p>
          </>
        }
        buttons={
          <>
            <Button text="kontaktujte nás" variant="tertiary" url="/contact" />

          </>
        }
        gallery={< Gallery data={slides} />}
      />

      < ServicesDetailBlock
        id="agro-sluzby"
        name="agro-sluzby"
        index={3}
        title="AGRO SLUŽBY"
        text={
          <>
            <p>
              Ponúkame komplexné agro služby pre farmárov a poľnohospodárske podniky. S našimi profesionálnymi zariadeniami a skúsenosťami zabezpečíme kvalitnú starostlivosť o vašu pôdu a plodiny.
            </p>
            <p>
              <b>Naša ponuka zahŕňa:</b>
            </p>
            <ul>
              <li>🌱 <b>Príprava ornej pôdy –</b> orba, hnojenie a ďalšie úpravy pôdy pre optimálny rast plodín.</li>
              <li>🌾 <b>Osev obilnín –</b> odborné osivo a technológia na zabezpečenie kvalitného a efektívneho výnosu.</li>
              <li>🌿 <b>Výroba a spracovanie sena –</b> profesionálne služby pri zbere a spracovaní sena pre farmy a chovateľov.</li>
              <li>🥔 <b>Výroba a zber zemiakov –</b> od prípravy pôdy až po zber kvalitných zemiakov pre rôzne účely.</li>
            </ul>
            <p>
              <b>Kontaktujte nás pre všetky agro potreby a zabezpečte kvalitné služby pre váš podnik!</b>
            </p>
          </>
        }
        buttons={
          <>
            <Button text="kontaktujte nás" variant="tertiary" url="/contact" />
          </>
        }
        gallery={< Gallery data={slides} />}
      />

      < ServicesDetailBlock
        id="dovoz-materialu"
        name="dovoz-materialu"
        index={4}
        title="DOVOZ MATERIALU"
        text={
          <>
            <p>
            Zabezpečujeme rýchly a spoľahlivý dovoz materiálov pre vaše stavebné projekty. Naša spoločnosť sa špecializuje na kvalitné doručenie rôznych druhov materiálov, aby ste mali vždy to, čo potrebujete, na dosah ruky.
            </p>
            <p>
              <b>Naša ponuka zahŕňa:</b>
            </p>
            <ul>
              <li>🚚 <b>Dovoz stavebného materiálu –</b> dovoz všetkých potrebných materiálov na vaše stavby, od tehál po cement, piesok a ďalšie.</li>
            </ul>
            <p>
              <b>Zaručujeme rýchle dodanie, kvalitné služby a flexibilitu podľa vašich požiadaviek. Kontaktujte nás ešte dnes!</b>
            </p>
          </>
        }
        buttons={
          <>
            <Button text="kontaktujte nás" variant="tertiary" url="/contact" />
          </>
        }
        gallery={< Gallery data={slides} />}
      />
    </main >
  );
}

export default services;