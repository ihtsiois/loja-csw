const ProductsList = () => {
    return (
        <div className="grid grid-cols-5 gap-4">
            {Array.from({ length: 20 }).map((_, k) => (
                <div key={k} className="border rounded-md overflow-hidden">
                    <img src="https://fakeimg.pl/200x200/f5f4f4/909090" className="w-full" />
                    <div className="px-3 py-2 grid gap-1">
                        <span className="font-medium text-sm text-muted-foreground">
                            Manta Líquida Quartzolit 18kg Branca
                        </span>
                        <span className="text-xs text-muted-foreground">{`Cod.: ${Math.floor(
                            Math.random() * 999999999
                        )}`}</span>
                    </div>
                    <div className="border-b-4 border-b-lime-400 px-3 py-2 font-medium">
                        <span>R$ 2,00</span>
                        <span className="text-sm">&nbsp;cada</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export { ProductsList };
