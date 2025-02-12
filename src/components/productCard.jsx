import './productCard.css'
import Label from './parts/Label'
import Button from './button'
import Image from './parts/Image'

const ProductCard = ({ product, pushProduct, disabled }) => {
    return (
        <div className="product__card" itemScope itemType="https://schema.org/Product">
            <meta itemProp="sku" content={product.id} />
            <meta itemProp="brand" content="Drevo a Služby" />
            <meta itemProp="category" content="Palivové drevo" />

            <div className='product__card__image'>
                <Image src={product.image} alt={product.name}  />
            </div>
            
            <div className="product__card__description">
                <h2 className="product__card__name" itemProp="name">{product.name}</h2>
                <p className="product__card__box">
                    <span className="product__card__left">{product.descriptionText}:</span>
                    <span className="product__card__pright" itemProp="description">{product.descriptionValue}</span>
                </p>

                {product.calorific && (
                <p className="product__card__box">
                    <span className="product__card__left">Výhrevnosť:</span>
                    <span className="product__card__pright" itemScope itemType="https://schema.org/PropertyValue" itemProp="additionalProperty">
                        <meta itemProp="name" content="Výhrevnosť" />
                        <meta itemProp="unitCode" content="MJ/kg" />
                        <span itemProp="value">{product.calorific} MJ/kg</span>
                    </span>
                </p>
                )}
            </div>

            {/* Cena a dostupnosť */}
            <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="priceCurrency" content="EUR" />
                <meta itemProp="availability" content="https://schema.org/InStock" />
                <p className="product__card__box product__card__box--price">
                    <span className="product__card__price">
                        <span itemProp="price">{product.price}</span>€
                    </span>
                    {product.calorific && <span>/prm</span>}
                </p>
            </div>

            {/* Tlačidlo na pridanie */}
            <div className='product__card__button'>
                <Button text="Pridať" variant="tertiary" buttonFunction={() => pushProduct(product)} disabledButton={disabled} />
            </div>

            {/* Animácia pri pridaní produktu */}
            <div className={`product__add ${disabled ? 'product__add--anim' : ''}`}>
                <Label>Produkt pridaný</Label>
            </div>
        </div>
    )
}

export default ProductCard;
