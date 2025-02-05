import './text.css';

const Text = ({children, margin, size}) => {
    const variant = margin === false ? `text--margin-off` : '';

    return (
        <div className={`text ${variant}  text--${size ? size : 'regular'}`}>
            {children}
        </div>
    )
}

export default Text