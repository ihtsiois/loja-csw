import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="mt-8 bg-muted text-muted-foreground border-t">
            <div className="max-w-5xl mx-auto px-6 py-8 flex gap-8">
                <Link href="/">
                    <img src="/static/images/footer-logo.svg" className="h-12" />
                </Link>
            </div>
        </footer>
    );
};

export { Footer };
