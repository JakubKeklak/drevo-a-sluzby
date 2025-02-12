import './Image.css'

const Image = ({ src, alt }) => {
    return (
        
            <img src={src} alt={alt} className="image" itemProp="image"/>
        
    )
}

export default Image