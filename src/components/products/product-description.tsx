import { Product } from '@/data/products';
import ReactMarkdown from 'react-markdown';

const ProductDescription = ({ product }: { product: Product }) => {
    return (
        <section id="descripion" className="space-y-2">
            <h2 className="text-xl font-medium">Descrição</h2>
            <ReactMarkdown children={product.description} />
        </section>
    );
};

export { ProductDescription };
