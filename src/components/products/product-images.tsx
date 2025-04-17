import { Product } from '@/data/products';

const ProductImages = ({ product }: { product: Product }) => {
    return (
        <div>
            <img src={product.images[0]} alt={product.name} className="w-full" />
        </div>
    );
};

export { ProductImages };
