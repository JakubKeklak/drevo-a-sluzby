import { ReactComponent as Facebook } from "../../svg/facebook.svg";
import { ReactComponent as Instagram } from "../../svg/instagram.svg";
import { ReactComponent as Mail } from "../../svg/mail.svg";
import { ReactComponent as Wood } from "../../svg/wood.svg";
import { ReactComponent as Traktor } from "../../svg/traktor.svg";
import { ReactComponent as Farm } from "../../svg/farm.svg";
import { ReactComponent as Truck } from "../../svg/truck.svg";
import { ReactComponent as Kosik } from "../../svg/kosik.svg";
import { ReactComponent as RightArrow } from "../../svg/rightArrow.svg";
import { ReactComponent as Play } from "../../svg/play.svg";
import { ReactComponent as Stop } from "../../svg/stop.svg";
import { ReactComponent as Close } from "../../svg/close.svg";
import { ReactComponent as SentMail } from "../../svg/sentMail.svg";
import { ReactComponent as Next } from "../../svg/next.svg";
import { ReactComponent as Prev } from "../../svg/prev.svg";
import { ReactComponent as Down } from "../../svg/down.svg";

const icons = {
  Facebook: Facebook,
  Instagram: Instagram,
  Mail: Mail,
  Wood: Wood,
  Traktor: Traktor,
  Farm: Farm,
  Truck: Truck,
  Kosik: Kosik,
  RightArrow: RightArrow,
  Play: Play,
  Stop: Stop,
  Close: Close,
  SentMail: SentMail,
  Next: Next,
  Prev: Prev,
  Down: Down,
};

const Icon = ({ icon }) => {
  const SelectedIcon = icons[icon] || null; // Return null if icon does not exist
  return SelectedIcon ? <SelectedIcon /> : null;
};

export default Icon;
