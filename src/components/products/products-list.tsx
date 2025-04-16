import { Product } from '@/data/products';
import Link from 'next/link';

const ProductsList = ({ data }: { data: Product[] }) => {
    const currency = new Intl.NumberFormat('pr-BR', { style: 'currency', currency: 'BRL' });

    return (
        <div className="grid grid-cols-5 gap-4">
            {data.map((product, k) => (
                <Link
                    href={`/products/${product.slug}`}
                    key={k}
                    className="border rounded-md flex flex-col overflow-hidden"
                >
                    <img src={product.thumbnail_src} alt={product.name} className="w-full" />
                    <div className="flex-1 px-3 py-2">
                        <span className="font-medium text-sm text-muted-foreground block">{product.name}</span>
                        <span className="text-xs text-muted-foreground">{`Ref.: ${product.ref}`}</span>
                    </div>
                    <div className="border-b-4 border-b-lime-400 px-3 py-2 font-medium">
                        <span>{currency.format(product.price)}</span>
                        <span className="text-sm">&nbsp;{product.unit}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export { ProductsList };
