'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import { products } from '@/data/products';
import { useRouter } from 'next/navigation';

const HeaderSearchBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                className="w-full shadow-none justify-start text-start"
                variant="outline"
                onClick={() => setOpen((prev) => !prev)}
            >
                <Search />
                <span>Buscar em Toda Loja</span>
            </Button>
            <ProductSearch open={open} setOpen={setOpen} />
        </>
    );
};

const ProductSearch = ({ open, setOpen }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) => {
    const currency = new Intl.NumberFormat('pr-BR', { style: 'currency', currency: 'BRL' });

    const router = useRouter();

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Digite para pesquisar em toda loja" />
            <CommandList>
                <CommandEmpty>Nenhum produto encontrado.</CommandEmpty>
                <CommandGroup>
                    {products.map((product, index) => (
                        <CommandItem
                            key={index}
                            onSelect={() => router.push(`/products/${product.slug}`)}
                            className="cursor-pointer"
                        >
                            <img src={product.thumbnail_src} alt={product.name} className="size-8 rounded" />
                            <div>
                                <span className="font-medium block">{product.name}</span>
                                <span className="text-sm text-muted-foreground">{currency.format(product.price)}</span>
                            </div>
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
};

export { HeaderSearchBar };
