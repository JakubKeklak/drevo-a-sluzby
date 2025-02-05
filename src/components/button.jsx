import './button.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import Icon from './parts/Icon';

const Button = ({ text, url, variant, icon, submit, buttonFunction, activeButton, disabledButton, buttonTitle }) => {
  const classVariant = variant || 'primary';
  const isSubmit = submit || false;
  const disabled = disabledButton ? true : undefined;
  const isHashLink = url && url.includes('#');
  const LinkComponent = isHashLink ? HashLink : Link;
  const Tag = url ? LinkComponent : 'button';
 
  return (
    <Tag to={url} type={isSubmit ? "submit" : undefined} className={`button button--${classVariant} ${activeButton} ${icon ? 'button--icon' : ''}`} smooth={isHashLink ? true : undefined} onClick={buttonFunction} disabled={disabled} title={buttonTitle ? buttonTitle : 'Button'}>
      {text &&
        <span className="button__text">{ text }</span>
      }
      {icon &&
        <span className="button__icon">
          <Icon icon={icon}/>
        </span>
      }
    </Tag>
  );
};

export default Button;