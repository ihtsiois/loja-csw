'use client';

import { Product } from '@/data/products';
import { useState } from 'react';

const ProductImages = ({ product }: { product: Product }) => {
    const [current, setCurrent] = useState(0);

    return (
        <div className="flex flex-col space-y-4">
            <img src={product.images[current]} alt={product.name} className="w-full" />
            <div className="flex gap-2 flex-wrap">
                {product.images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className="size-18 aspect-square border rounded overflow-hidden cursor-pointer"
                    >
                        <img src={image} className="hover:brightness-90 transition-all" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export { ProductImages };
