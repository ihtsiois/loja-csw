import { Product } from '@/data/products';
import { ProductAddCart } from './product-cart-add';

const ProductCTA = ({ product }: { product: Product }) => {
    const currency = new Intl.NumberFormat('pr-BR', { style: 'currency', currency: 'BRL' });

    return (
        <div className="py-5 flex flex-col gap-8">
            <div>
                <span className="text-sm text-muted-foreground">{`Ref.: ${product.ref}`}</span>
                <h1 className="text-4xl font-medium">{product.name}</h1>
            </div>
            <div className="grid">
                <span className="text-sm text-muted-foreground">
                    Vendido e Entregue por <span className="font-medium">Compra Certa</span>.
                </span>
                <span className="text-sm text-muted-foreground">{`12x de ${currency.format(
                    product.price / 12
                )} ou`}</span>
                <div>
                    <span className="text-3xl">{currency.format(product.price)}</span>
                    <span>&nbsp;à vista</span>
                </div>
            </div>
            <div className="grid space-y-2">
                <ProductAddCart product={product} />
            </div>
        </div>
    );
};

export { ProductCTA };
