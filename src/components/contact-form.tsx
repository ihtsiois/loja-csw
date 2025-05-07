'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

export const ContactForm = () => {
    return (
        <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" placeholder="Seu nome completo" autoComplete="name" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" placeholder="Seu melhor e-mail" autoComplete="email" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" placeholder="Seu número de telefone" autoComplete="tel" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="msg">Mensagem</Label>
                <Textarea
                    id="msg"
                    placeholder="Digite sua mensagem"
                    autoComplete="tel"
                    className="w-full resize-none overflow-auto"
                />
            </div>
            <Button type="submit">Entar em contato</Button>
        </form>
    );
};
