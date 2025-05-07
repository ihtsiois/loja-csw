'use client';

import { Loader, PlusIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Product } from '@/data/products';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { useState } from 'react';

export const ProductAddCart = ({ product }: { product: Product }) => {
    const [open, setOpen] = useState(false);
    const [amount, setAmount] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const submit = async () => {
        setIsLoading(true);
        await new Promise((res) => setTimeout(res, 1000));
        setOpen(false);
        setAmount(1);
        setIsLoading(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <PlusIcon />
                    <span>Adicionar ao Carrinho</span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Adicionar ao Carrinho?</DialogTitle>
                </DialogHeader>
                <div className="flex gap-4">
                    <div className="relative flex items-center flex-1">
                        <Input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            disabled={isLoading}
                            className="pr-9"
                            aria-label={`Quantidade em ${product.unit}`}
                        />
                        <span className="absolute right-3 text-gray-500 text-sm pointer-events-none select-none">
                            {product.unit}
                        </span>
                    </div>
                    <Button onClick={submit} className="flex-2" disabled={isLoading}>
                        {!isLoading ? 'Adicionar' : <Loader className="animate-spin" />}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
